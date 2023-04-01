export default interface IContent {
  menu: {
    profile_picture: {
      alt: string,
      path: string,
    },
    logo: {
      alt: string,
      path: string,
    },
    profession: string,
    pages:
    {
      id: number,
      name: string,
      link: string
    }[],
    external_links: {
      id: number,
      link: string,
      alt: string,
      path: string,
    }[],
    languages: {
      id: number,
      alt: string,
      name: string,
      flag_path: string,
    }[]
  },
  projects: {
    headline: string,
    list: {
      id: number,
      name: string,
      img_url: string,
      img_url_hover: string,
      link: string,
    }[],
  },
  curriculum: {
    headline: string,
    sections: {
      id: number,
      title: string,
      information: {
        id: number,
        subtitle: string,
        descriptions: string[],
      }[],
    }[],
  }
}