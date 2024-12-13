1. Estrutura e Organização do Projeto
    • Usar React com TypeScript para melhor tipagem e manutenção do código.
    • Estruturar pastas para componentes reutilizáveis e páginas específicas:
        ◦ /components: Botões, modais, tabelas, e outros elementos reutilizáveis.
        ◦ /pages: Telas específicas (Aéreo, Hotel, Carro, etc.).
        ◦ /services: Funções para chamadas à API.

2. Telas Necessárias
    1. Dashboard Principal:
        ◦ Mostrar estatísticas (vendas, cancelamentos, reembolsos).
        ◦ Gráficos e métricas em tempo real.
    2. Aéreo:
        ◦ Exibir lista de vendas por data.
        ◦ Filtros avançados (companhia aérea, status de pagamento, etc.).
        ◦ Opção para gerar relatórios e visualizar detalhes.
    3. Hotel:
        ◦ Similar ao "Aéreo", mas com dados de reservas de hotéis.
    4. Carro, Seguro, Diversos:
        ◦ Telas para listar, filtrar e gerenciar vendas em cada categoria.
    5. Gestão de Reembolsos:
        ◦ Listar solicitações pendentes.
        ◦ Permitir aprovações ou rejeições com justificativas.
    6. Configurações:
        ◦ Gerenciar integrações (Benner, OBTs).
        ◦ Configurar usuários e permissões.

3. Melhorias de Design
    • Usar Material UI (MUI) ou TailwindCSS para estilização consistente e responsiva.
    • Seguir boas práticas de UX:
        ◦ Navegação clara (menu lateral fixo ou header com links rápidos).
        ◦ Feedback visual (spinners, mensagens de sucesso/erro).
        ◦ Telas responsivas (mobile e desktop).