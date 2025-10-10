import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Termos e Condições</h1>
        <p className="legal-updated">Última atualização: 10 de outubro de 2025</p>

        <section className="legal-section">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao aceder e utilizar o website Mestre Cuca ("Site"), você concorda em cumprir e estar vinculado 
            pelos seguintes termos e condições de uso. Se não concordar com estes termos, por favor não utilize 
            o nosso Site.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Uso do Site</h2>
          <h3>2.1 Licença de Uso</h3>
          <p>
            Concedemos-lhe uma licença limitada, não exclusiva e não transferível para aceder e usar o Site 
            para fins pessoais e não comerciais, de acordo com estes Termos.
          </p>

          <h3>2.2 Restrições</h3>
          <p>Você concorda em não:</p>
          <ul className="no-bullets">
            <li>Usar o Site para qualquer finalidade ilegal ou não autorizada</li>
            <li>Tentar obter acesso não autorizado ao Site ou aos seus sistemas relacionados</li>
            <li>Copiar, modificar, distribuir ou vender qualquer conteúdo do Site sem autorização</li>
            <li>Usar técnicas de data scraping, robots ou métodos similares de extração de dados</li>
            <li>Interferir com o funcionamento adequado do Site</li>
            <li>Transmitir vírus, malware ou qualquer código malicioso</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Conteúdo do Site</h2>
          <h3>3.1 Propriedade Intelectual</h3>
          <p>
            Todo o conteúdo do Site, incluindo mas não limitado a texto, gráficos, logotipos, imagens, 
            receitas e software, é propriedade do Mestre Cuca ou dos seus licenciadores e está protegido 
            pelas leis de direitos de autor e propriedade intelectual portuguesas e internacionais.
          </p>

          <h3>3.2 Receitas</h3>
          <p>
            As receitas fornecidas no Site são apenas para uso pessoal. Você pode prepará-las em casa, 
            mas não pode reproduzir, publicar ou distribuir as receitas comercialmente sem a nossa autorização 
            prévia por escrito.
          </p>

          <h3>3.3 Precisão do Conteúdo</h3>
          <p>
            Embora nos esforcemos para fornecer informações precisas e atualizadas, não garantimos a precisão, 
            completude ou atualidade de qualquer conteúdo no Site. As receitas são fornecidas "como estão" e 
            os resultados podem variar.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Contas de Utilizador</h2>
          <p>
            Atualmente, o Site utiliza armazenamento local do navegador para guardar preferências e favoritos. 
            Você é responsável por manter a segurança do seu dispositivo e pelos dados armazenados localmente.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Newsletter</h2>
          <p>
            Ao subscrever a nossa newsletter, você concorda em receber comunicações eletrónicas do Mestre Cuca. 
            Pode cancelar a subscrição a qualquer momento através do link fornecido nos emails ou contactando-nos 
            diretamente.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Isenção de Responsabilidade</h2>
          <h3>6.1 Alergias e Restrições Alimentares</h3>
          <p>
            As receitas podem conter alérgenos. É da sua responsabilidade verificar os ingredientes e 
            garantir que são adequados para o seu consumo, especialmente se tiver alergias, intolerâncias 
            ou restrições alimentares.
          </p>

          <h3>6.2 Resultados</h3>
          <p>
            Não garantimos que seguir as nossas receitas produzirá os resultados esperados. Os resultados 
            podem variar dependendo de fatores como ingredientes, equipamento, altitude e experiência culinária.
          </p>

          <h3>6.3 Saúde e Segurança</h3>
          <p>
            Você é responsável por seguir práticas seguras de manuseamento de alimentos e cozinha. 
            Não nos responsabilizamos por doenças ou lesões resultantes da preparação ou consumo de receitas.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            Na medida máxima permitida pela lei, o Mestre Cuca não será responsável por quaisquer danos 
            diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou 
            incapacidade de usar o Site, incluindo mas não limitado a:
          </p>
          <ul className="no-bullets">
            <li>Perda de dados ou informações</li>
            <li>Interrupção de negócios</li>
            <li>Danos pessoais ou patrimoniais</li>
            <li>Erros ou omissões no conteúdo</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Links para Terceiros</h2>
          <p>
            O Site pode conter links para websites de terceiros. Não controlamos nem somos responsáveis 
            pelo conteúdo, políticas de privacidade ou práticas desses sites. O acesso a sites de terceiros 
            é por sua conta e risco.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão 
            em vigor imediatamente após a publicação no Site. O uso continuado do Site após a publicação 
            de alterações constitui aceitação dos novos Termos.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Rescisão</h2>
          <p>
            Podemos suspender ou encerrar o seu acesso ao Site imediatamente, sem aviso prévio, se violar 
            estes Termos ou por qualquer outro motivo ao nosso critério.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Lei Aplicável</h2>
          <p>
            Estes Termos são regidos e interpretados de acordo com as leis de Portugal. Qualquer disputa 
            relacionada com estes Termos será submetida à jurisdição exclusiva dos tribunais portugueses.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contacto</h2>
          <p>
            Se tiver questões sobre estes Termos e Condições, pode contactar-nos através de:
          </p>
          <ul className="no-bullets">
            <li>Email: mestrecuca@gmail.com</li>
            <li>Telefone: +351 123 456 789</li>
            <li>Ou através do nosso <Link to="/contact" className="legal-link">formulário de contacto</Link></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>13. Disposições Gerais</h2>
          <p>
            Se qualquer disposição destes Termos for considerada inválida ou inexequível, as restantes 
            disposições permanecerão em pleno vigor e efeito. A falha em fazer cumprir qualquer direito 
            ou disposição destes Termos não constituirá uma renúncia a esse direito ou disposição.
          </p>
        </section>

        <div className="legal-actions">
          <Link to="/" className="btn-secondary">Voltar ao Início</Link>
        </div>
      </div>
    </main>
  )
}

export default Terms;
