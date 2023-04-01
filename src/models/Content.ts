import IContent from './interfaces/IContent';

export default class Content implements IContent {
  private _menu = {
    profile_picture: {
      alt: '',
      path: '',
    },
    logo: {
      alt: '',
      path: '',
    },
    profession: '',
    pages: [{
      id: 0,
      name: '',
      link: ''
    }],
    external_links: [{
      id: 0,
      link: '',
      alt: '',
      path: '',
    }],
    languages: [{
      id: 0,
      alt: '',
      name: '',
      flag_path: '',
    }]
  };
  private _projects = {
    headline: '',
    list: [{
      id: 0,
      name: '',
      img_url: '',
      img_url_hover: '',
      link: '',
    }],
  };
  private _curriculum = {
    headline: '',
    sections: [{
      id: 0,
      title: '',
      information: [{
        id: 0,
        subtitle: '',
        descriptions: [''],
      }],
    }]
  };

  constructor(
    menu = {
      profile_picture: {
        alt: '',
        path: '',
      },
      logo: {
        alt: '',
        path: '',
      },
      profession: '',
      pages: [{
        id: 0,
        name: '',
        link: ''
      }],
      external_links: [{
        id: 0,
        link: '',
        alt: '',
        path: '',
      }],
      languages: [{
        id: 0,
        alt: '',
        name: '',
        flag_path: '',
      }]
    },
    projects = {
      headline: '',
      list: [{
        id: 0,
        name: '',
        img_url: '',
        img_url_hover: '',
        link: '',
      }],
    },
    curriculum = {
      headline: '',
      sections: [{
        id: 0,
        title: '',
        information: [{
          id: 0,
          subtitle: '',
          descriptions: [''],
        }],
      }]
    }) {
    this.menu = menu;
    this.projects = projects;
    this.curriculum = curriculum;
  }

  public get menu() {
    return this._menu;
  }

  public set menu(menu: typeof this._menu) {
    this._menu = menu;
  }

  public get projects() {
    return this._projects;
  }

  public set projects(projects: typeof this._projects) {
    this._projects = projects;
  }

  public get curriculum() {
    return this._curriculum;
  }

  public set curriculum(curriculum: typeof this._curriculum) {
    this._curriculum = curriculum;
  }
}