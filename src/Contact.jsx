import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    };

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Entre em Contacto</h1>
                <p className="hero-subtitle">
                    Tem alguma questão ou projeto em mente? Adoraríamos ouvir de si!
                    Preencha o formulário abaixo e entraremos em contacto o mais breve possível.
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="home-section">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome" className="form-label">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefone" className="form-label">Telefone (opcional)</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem" className="form-label">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                className="form-textarea"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="home-section">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', color: '#2d3748', marginBottom: '3rem' }}>
                    Informações de Contacto
                </h2>
                <div className="cards-grid">
                    <div className="feature-card">d
                        <div className="card-icon">
                            <MdEmail />
                        </div>
                        <h3 className="card-title">Email</h3>
                        <p className="card-description">mestrecuca@gmail.com</p>
                    </div>
                    <div className="feature-card">
                        <div className="card-icon">
                            <MdPhone />
                        </div>
                        <h3 className="card-title">Telefone</h3>
                        <p className="card-description">+351 123 456 789</p>
                    </div>
                    <div className="feature-card">
                        <div className="card-icon">
                            <MdLocationOn />
                        </div>
                        <h3 className="card-title">Localização</h3>
                        <p className="card-description">Porto, Portugal</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;