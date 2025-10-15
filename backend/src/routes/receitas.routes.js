import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();

const parseList = (v) => {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split(',').map(s => s.trim()).filter(Boolean);
  return [];
};

// Get todas as receitas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM recipes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar receitas' });
  }
});

// Get receita por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM recipes WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Receita não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar receita' });
  }
});

// Post nova receita 
router.post('/', async (req, res) => {
  const {
    title,
    image,
    description,
    time,
    difficulty,
    ingredients,
    instructions
  } = req.body;

  const ingredientsList = parseList(ingredients);
  const instructionsList = parseList(instructions);

  try {
    await pool.query(
      'INSERT INTO recipes (title, image, description, time, difficulty, ingredients, instructions) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        title ?? '',
        image ?? '',
        description ?? '',
        time ?? '',
        difficulty ?? '',
        JSON.stringify(ingredientsList),
        JSON.stringify(instructionsList)
      ]
    );

    const detailed = {
      title: title ?? '',
      image: image ?? '',
      description: description ?? '',
      time: time ?? '',
      difficulty: difficulty ?? '',
      ingredients: ingredientsList,
      instructions: instructionsList
    };

    res.status(201).json(detailed);
  } catch (err) {
    console.error('Erro ao criar receita:', err);
    res.status(500).json({ error: 'Erro ao criar receita' });
  }
});

// Put atualizar receita (por id)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title,
    image,
    description,
    time,
    difficulty,
    ingredients,
    instructions
  } = req.body;

  try {
    const ingredientsJSON = JSON.stringify(parseList(ingredients));
    const instructionsJSON = JSON.stringify(parseList(instructions));

    const [result] = await pool.query(
      'UPDATE recipes SET title = ?, image = ?, description = ?, time = ?, difficulty = ?, ingredients = ?, instructions = ? WHERE id = ?',
      [title ?? '', image ?? '', description ?? '', time ?? '', difficulty ?? '', ingredientsJSON, instructionsJSON, id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ error: 'Receita não encontrada' });

    res.json({
      title: title ?? '',
      image: image ?? '',
      description: description ?? '',
      time: time ?? '',
      difficulty: difficulty ?? '',
      ingredients: parseList(ingredients),
      instructions: parseList(instructions)
    });
  } catch (err) {
    console.error('Erro ao atualizar receita:', err);
    res.status(500).json({ error: 'Erro ao atualizar receita' });
  }
});

// Delete receita
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM recipes WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Receita não encontrada' });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar receita' });
  }
});

export default router;