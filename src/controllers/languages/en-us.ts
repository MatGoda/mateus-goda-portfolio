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
import illustration from '../../assets/images/projects/illustration.png';
import illustration_hover from '../../assets/images/projects/illustration_hover.png';
import witch_market from '../../assets/images/projects/witch_market.png';
import witch_market_hover from '../../assets/images/projects/witch_market_hover.png';
import port_tk from '../../assets/images/projects/port_tk.png';
import port_tk_hover from '../../assets/images/projects/port_tk_hover.png';
import Content from '../../models/Content';

const enus = new Content(
  {
    profile_picture: {
      alt: 'Mateus Goda\'s profile picture',
      path: picture
    },
    logo: {
      alt: 'Mateus Goda logo',
      path: logo
    },
    profession: 'UI/UX Designer & Illustrator',
    pages: [
      {
        id: 1,
        name: 'Projects',
        link: '/'
      },
      {
        id: 2,
        name: 'Curriculum',
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
    headline: 'Projects',
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
        img_url: illustration,
        img_url_hover: illustration_hover,
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
    headline: 'Curriculum',
    sections: [
      {
        id: 1,
        title: 'Mateus Goda Guimarães:',
        information: [
          {
            id: 1,
            subtitle: 'Date of Birth:',
            descriptions: [
              '08/10/2001'
            ]
          },
          {
            id: 2,
            subtitle: 'Cel:',
            descriptions: [
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
        title: 'Academic education:',
        information: [
          {
            id: 1,
            subtitle: 'Design College - FIB (Faculdades Integradas de Bauru)',
            descriptions: [
              'Finished in: 2022 ​'
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Skills:',
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
        title: 'Languages:',
        information: [
          {
            id: 1,
            subtitle: 'English - Advanced.',
            descriptions: [
              ''
            ]
          },
          {
            id: 2,
            subtitle: 'Japanese - Basic.',
            descriptions: [
              ''
            ]
          }
        ]
      },
      {
        id: 5,
        title: 'Professional Experience',
        information: [
          {
            id: 1,
            subtitle: 'Internship on TechKnowledge - Cursos de Fonoaudiologia online',
            descriptions: [
              'Start: 04/11/2022',
              'End: 12/20/2022',
              'Worked taking care of social networks, with greater focus on Instagram and designing banners, folders and materials for the courses.'
            ]
          },
          {
            id: 2,
            subtitle: 'Internship on SLA Fashion/Personalizados',
            descriptions: [
              'Start: 07/01/2021',
              'End: 02/11/2022',
              'Worked taking care of social media, with greater focus on Instagrans: @SLAFashion and @SLAFashionPersonalizados, making mockups of custom uniforms, printable art to be displayed in the store windows and taking care of the website for custom uniforms.'
            ]
          },
          {
            id: 3,
            subtitle: 'Internship on Gubiele Baby',
            descriptions: [
              'Start: 09/16/2020',
              'End: 02/15/2021',
              'Worked taking care of the company\'s website and posts on the company\'s social networks, mainly Stories on Instragram.'
            ]
          }
        ]
      },
      {
        id: 6,
        title: 'Complementary Formation:',
        information: [
          {
            id: 1,
            subtitle: 'Formation in Adobe CC Publishing - Illustrator, Photoshop e InDesign',
            descriptions: [
              'Realized in 2017 - Senac (6 months)'
            ]
          },
          {
            id: 2,
            subtitle: 'Formation in Digital Painting - CariCanecas',
            descriptions: [
              'Realized in 2020 - CariCanecas (2 months)'
            ]
          },
          {
            id: 3,
            subtitle: 'Formation in Online Entrepreneurship Uncomplicates',
            descriptions: [
              'Realized in 2020 - SEBRAE (10 hours)'
            ]
          },
          {
            id: 4,
            subtitle: 'Formation in Creative Video Editing - Hotmart',
            descriptions: [
              'Realized in 2020 (10 hours)'
            ]
          },
          {
            id: 5,
            subtitle: 'Formation in Basics of Pixel Art - Alura',
            descriptions: [
              'Realized in 06/21/2021 to 06/23/2021 (2 hours)'
            ]
          },
          {
            id: 6,
            subtitle: 'Formation in Basic Pixel Art for RPG - Alura',
            descriptions: [
              'Realized in 06/24/2021 to 06/28/2021 (3 hours)'
            ]
          },
          {
            id: 7,
            subtitle: 'Formation in Medium Pixel Art for RPG - Alura',
            descriptions: [
              'Realized in 06/28/2021 to 06/30/2021 (6 hours)'
            ]
          },
          {
            id: 8,
            subtitle: 'Formation in Top-Down View Game Scenario - Alura',
            descriptions: [
              'Realized in 06/30/2021 to 07/07/2021 (6 hours)'
            ]
          },
          {
            id: 9,
            subtitle: 'Formation in Pixel Art For Games - Alura',
            descriptions: [
              'Realized in 07/07/2021 to 07/14/2021 (5 hours)'
            ]
          },
          {
            id: 10,
            subtitle: 'Formation in Games Endless Runner: Art Direction for Games - Alura',
            descriptions: [
              'Realized in 07/14/2021 to 07/21/2021 (6 hours)'
            ]
          },
          {
            id: 11,
            subtitle: 'Formation in Endless Runner - Character Design - Alura',
            descriptions: [
              'Realized in 07/22/2021 to 07/26/2021 (6 hours)'
            ]
          },
          {
            id: 12,
            subtitle: 'Formation in Character Design - Alura',
            descriptions: [
              'Realized in 07/29/2021 to 08/03/2021 (6 hours)'
            ]
          },
          {
            id: 13,
            subtitle: 'Formation in Endless Runner - Splash Art - Alura',
            descriptions: [
              'Realized in 01/30/2022 to 02/14/2022 (6 hours)'
            ]
          },
          {
            id: 14,
            subtitle: 'Formation in UX Design Career Transition in Technology Areas - Alura',
            descriptions: [
              'Realized in 02/15/2022 to 02/15/2022 (8 hours)'
            ]
          }
        ]
      }
    ]
  }
);

export default enus;