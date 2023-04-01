import picture from '../../assets/images/menu/mgoda.png';
import logo from '../../assets/images/menu/logo_mgoda.png';
import brazil_flag from '../../assets/images/menu/brazil_flag.png';
import eua_flag from '../../assets/images/menu/eua_flag.png';
import linkedin from '../../assets/images/menu/linkedin.svg';
import instagram from '../../assets/images/menu/instagram.svg';
import behance from '../../assets/images/menu/behance.svg';
import envelope from '../../assets/images/menu/envelope-solid.svg';
import artstation from '../../assets/images/menu/artstation.svg';
import whatsapp from '../../assets/images/menu/whatsapp.svg';
import alchemist_tale from '../../assets/images/projects/alchemist_tale.png';
import alchemist_tale_hover from '../../assets/images/projects/alchemist_tale_hover.png';
import social from '../../assets/images/projects/social.png';
import social_hover from '../../assets/images/projects/social_hover.png';
import portfolio from '../../assets/images/projects/portfolio.png';
import portfolio_hover from '../../assets/images/projects/portfolio_hover.png';
import ilustracoes from '../../assets/images/projects/ilustracoes.png';
import ilustracoes_hover from '../../assets/images/projects/ilustracoes_hover.png';
import witch_market from '../../assets/images/projects/witch_market.png';
import witch_market_hover from '../../assets/images/projects/witch_market_hover.png';
import port_tk from '../../assets/images/projects/port_tk.png';
import port_tk_hover from '../../assets/images/projects/port_tk_hover.png';
import Content from '../../models/Content';

const ptbr = new Content(
  {
    profile_picture: {
      alt: 'Foto de perfil de Mateus Goda',
      path: picture
    },
    logo: {
      alt: 'Logo de Mateus Goda',
      path: logo
    },
    profession: 'Designer UI/UX e Ilustrador',
    pages: [
      {
        id: 1,
        name: 'Projetos',
        link: '/'
      },
      {
        id: 2,
        name: 'Currículo',
        link: '/curriculo'
      }
    ],
    external_links: [
      {
        id: 1,
        link: 'https://www.linkedin.com/in/mateus-goda-guimar%C3%A3es-4549a916a/',
        alt: 'Linkedin',
        path: linkedin
      },
      {
        id: 2,
        link: 'https://www.instagram.com/goda.mat/',
        alt: 'Instagram',
        path: instagram
      },
      {
        id: 3,
        link: 'https://www.behance.net/mateusgoda',
        alt: 'Behance',
        path: behance
      },
      {
        id: 4,
        link: 'mailto:mateusgodag@gmail.com',
        alt: 'Email',
        path: envelope
      },
      {
        id: 5,
        link: 'https://www.artstation.com/mateusgoda',
        alt: 'ArtStation',
        path: artstation
      },
      {
        id: 6,
        link: 'https://wa.me/5514996749988',
        alt: 'WhatsApp',
        path: whatsapp
      },
    ],
    languages: [
      {
        id: 1,
        alt: 'Bandeira do Brasil',
        name: 'pt-br',
        flag_path: brazil_flag
      },
      {
        id: 2,
        alt: 'Flag of the United States of America',
        name: 'en-us',
        flag_path: eua_flag
      }
    ]
  },
  {
    headline: 'Projetos',
    list: [
      {
        id: 1,
        name: 'Alchemist Tale',
        img_url: alchemist_tale,
        img_url_hover: alchemist_tale_hover,
        link: 'https://www.behance.net/gallery/165636073/Alchemist-Tale'
      },
      {
        id: 2,
        name: 'Social',
        img_url: social,
        img_url_hover: social_hover,
        link: 'https://www.behance.net/gallery/165647063/Social-Media-Freelance?share=1'
      },
      {
        id: 3,
        name: 'Portfólio',
        img_url: portfolio,
        img_url_hover: portfolio_hover,
        link: 'https://www.behance.net/gallery/165649915/Projeto-Site-Portfolio'
      },
      {
        id: 4,
        name: 'Ilustrações',
        img_url: ilustracoes,
        img_url_hover: ilustracoes_hover,
        link: 'https://www.artstation.com/mateusgoda'
      },
      {
        id: 5,
        name: 'Witch Market',
        img_url: witch_market,
        img_url_hover: witch_market_hover,
        link: 'https://www.artstation.com/mateusgoda/albums/8314725'
      },
      {
        id: 6,
        name: 'Port tk',
        img_url: port_tk,
        img_url_hover: port_tk_hover,
        link: 'https://www.behance.net/gallery/165652985/Portfolio-TechKnowledge'
      }
    ]
  },
  {
    headline: 'Currículo',
    sections: [
      {
        id: 1,
        title: 'Mateus Goda Guimarães:',
        information: [
          {
            id: 1,
            subtitle: 'Nascimento:',
            descriptions: [
              '10/08/2001'
            ]
          },
          {
            id: 2,
            subtitle: 'Tel/Cel:',
            descriptions: [
              '+55 (14) 3276-2500',
              '+55 (14) 99674-9988'
            ]
          },
          {
            id: 3,
            subtitle: 'Email:',
            descriptions: [
              'mateusgodag@gmail.com'
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Formação Acadêmica:',
        information: [
          {
            id: 1,
            subtitle: 'Faculdade de Design - FIB (Faculdades Integradas de Bauru)',
            descriptions: [
              'Concluído em: 2022.'
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Dominío em:',
        information: [
          {
            id: 1,
            subtitle: 'Photoshop.',
            descriptions: [
              ''
            ]
          },
          {
            id: 2,
            subtitle: 'Figma.',
            descriptions: [
              ''
            ]
          },
          {
            id: 3,
            subtitle: 'Illustrator.',
            descriptions: [
              ''
            ]
          },
          {
            id: 4,
            subtitle: 'InDesign.',
            descriptions: [
              ''
            ]
          },
          {
            id: 5,
            subtitle: 'Inventor.',
            descriptions: [
              ''
            ]
          },
          {
            id: 6,
            subtitle: 'Blender.',
            descriptions: [
              ''
            ]
          },
          {
            id: 7,
            subtitle: 'Vegas Pro.',
            descriptions: [
              ''
            ]
          },
          {
            id: 8,
            subtitle: 'After Effects.',
            descriptions: [
              ''
            ]
          },
          {
            id: 9,
            subtitle: 'Excel, Word e Power Point.',
            descriptions: [
              ''
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'Idiomas:',
        information: [
          {
            id: 1,
            subtitle: 'Inglês - Avançado.',
            descriptions: [
              ''
            ]
          },
          {
            id: 2,
            subtitle: 'Japonês - Básico.',
            descriptions: [
              ''
            ]
          }
        ]
      },
      {
        id: 5,
        title: 'Experiência',
        information: [
          {
            id: 1,
            subtitle: 'Estágio TechKnowledge - Cursos de Fonoaudiologia online',
            descriptions: [
              'Início: 11/04/2022',
              'Término: 20/12/2022',
              'Atuei cuidando das redes sociais, com maior foco no Instagram e diagramando banners, folders e materiais para os cursos.'
            ]
          },
          {
            id: 2,
            subtitle: 'Estágio SLA Fashion/Personalizados',
            descriptions: [
              'Início: 01/07/2021',
              'Término: 11/02/2022',
              'Atuei cuidando das redes sociais, com maior foco nos Instagrans: @SLAFashion e @SLAFashionPersonalizados, fazendo mockups de uniformes personalizados, artes para impressão para serem expostas na vitrine da loja e cuidando do site dos uniformes personalizados.'
            ]
          },
          {
            id: 3,
            subtitle: 'Estágio Gubiele Baby',
            descriptions: [
              'Início: 16/09/2020',
              'Término: 15/02/2021',
              'Atuei cuidando do site da empresa e cuidando de algumas postagens nas redes sociais da empresa, principalmente Stories no Instragram.'
            ]
          }
        ]
      },
      {
        id: 6,
        title: 'Formação Complementar:',
        information: [
          {
            id: 1,
            subtitle: 'Formação Adobe CC Editoração - Illustrator, Photoshop e InDesign',
            descriptions: [
              'Realizado em 2017 - Senac (6 meses)'
            ]
          },
          {
            id: 2,
            subtitle: 'Curso de Desenho Digital - CariCanecas',
            descriptions: [
              'Realizado em 2020 - CariCanecas (2 meses)'
            ]
          },
          {
            id: 3,
            subtitle: 'Curso Empreendedorismo Online Descomplica',
            descriptions: [
              'Realizado em 2020 - SEBRAE (10 horas)'
            ]
          },
          {
            id: 4,
            subtitle: 'Curso Edição Criativa de Vídeos - Hotmart',
            descriptions: [
              'Realizado em 2020 (10 horas)'
            ]
          },
          {
            id: 5,
            subtitle: 'Curso Básico de Pixel Arte - Alura',
            descriptions: [
              'Realizado de 21/06/2021 até 23/06/2021 (2 horas)'
            ]
          },
          {
            id: 6,
            subtitle: 'Curso Básico Pixel Arte para RPG - Alura',
            descriptions: [
              'Realizado de 24/06/2021 até 28/06/2021 (3 horas)'
            ]
          },
          {
            id: 7,
            subtitle: 'Curso Médio Pixel Arte para RPG - Alura',
            descriptions: [
              'Realizado de 28/06/2021 até 30/06/2021 (6 horas)'
            ]
          },
          {
            id: 8,
            subtitle: 'Curso Cenário Jogo Top-Down View - Alura',
            descriptions: [
              'Realizado de 30/06/2021 até 07/07/2021 (6 horas)'
            ]
          },
          {
            id: 9,
            subtitle: 'Curso Pixel Arte Para Games - Alura',
            descriptions: [
              'Realizado de 07/07/2021 até 14/07/2021 (5 horas)'
            ]
          },
          {
            id: 10,
            subtitle: 'Curso Games Endless Runner: Direção de Arte para Jogos - Alura',
            descriptions: [
              'Realizado de 14/07/2021 até 21/07/2021 (6 horas)'
            ]
          },
          {
            id: 11,
            subtitle: 'Curso Endless Runner - Design de Personagem - Alura',
            descriptions: [
              'Realizado de 22/07/2021 até 26/07/2021 (6 horas)'
            ]
          },
          {
            id: 12,
            subtitle: 'Cursos Design de Personagem - Alura',
            descriptions: [
              'Realizado de 29/07/2021 até 03/08/2021 (6 horas)'
            ]
          },
          {
            id: 13,
            subtitle: 'Curso Endless Runner Splash Art - Alura',
            descriptions: [
              'Realizado de 30/01/2022 até 14/02/2022 (6 horas)'
            ]
          },
          {
            id: 14,
            subtitle: 'Curso UX Design Transição de Carreira em Áreas de Tecnologia - Alura',
            descriptions: [
              'Realizado de 15/02/2022 até 15/02/2022 (8 horas)'
            ]
          }
        ]
      }
    ]
  }
);

export default ptbr;