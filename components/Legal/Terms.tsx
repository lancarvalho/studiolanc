
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Termos de Uso</h1>
        <p className="text-slate-400 mb-12">Última atualização: Maio de 2024</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">1. Aceitação dos Termos</h2>
            <p className="text-slate-300 leading-relaxed">
              Ao acessar o site Lanc Studio, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">2. Uso de Licença</h2>
            <p className="text-slate-300 leading-relaxed">
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Lanc Studio, apenas para visualização pessoal e não comercial transitória. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
            </p>
            <ul className="list-disc pl-6 mt-4 text-slate-300 space-y-2">
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Lanc Studio;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">3. Isenção de Responsabilidade</h2>
            <p className="text-slate-300 leading-relaxed">
              Os materiais no site da Lanc Studio são fornecidos 'como estão'. Lanc Studio não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">4. Limitações</h2>
            <p className="text-slate-300 leading-relaxed">
              Em nenhum caso o Lanc Studio ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Lanc Studio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
