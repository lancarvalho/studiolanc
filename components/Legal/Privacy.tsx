
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Privacidade</h1>
        <p className="text-slate-400 mb-12">Última atualização: Maio de 2024</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">1. Coleta de Informações</h2>
            <p className="text-slate-300 leading-relaxed">
              A sua privacidade é importante para nós. É política do Lanc Studio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Lanc Studio, e outros sites que possuímos e operamos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">2. Uso de Dados</h2>
            <p className="text-slate-300 leading-relaxed">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">3. Retenção e Segurança</h2>
            <p className="text-slate-300 leading-relaxed">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">4. Cookies e Armazenamento Local</h2>
            <p className="text-slate-300 leading-relaxed">
              Este site utiliza LocalStorage para salvar preferências de interface e autenticação administrativa de forma segura e local no seu navegador. Não utilizamos cookies de rastreamento de terceiros para fins publicitários.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">5. Links Externos</h2>
            <p className="text-slate-300 leading-relaxed">
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
