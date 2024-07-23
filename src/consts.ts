import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'Yurik',
  TIMEZONE: 'UTC + 7',
  LOCATION: 'Bintan Island, Indonesia',
  NUM_WRITINGS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EXPERIENCES_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION:
    'Aliquip dolore deserunt Lorem sit ullamco ad eiusmod minim magna esse.',
};

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION:
    'Minim esse enim nulla esse amet ad non exercitation aliqua enim esse.',
};

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'Est culpa qui nostrud est voluptate ea dolor ea ut sint occaecat magna.',
};

export const EXPERIENCES: Metadata = {
  TITLE: 'Experiences',
  DESCRIPTION: 'Ipsum eu commodo pariatur laboris dolore eiusmod fugiat in do.',
};

export const SOCIALS: Socials = [
  {
    NAME: 'twitter',
    HREF: 'https://twitter.com/yurikdevv',
  },
  {
    NAME: 'github',
    HREF: 'https://github.com/yurik-dev',
  },
  {
    NAME: 'linkedin',
    HREF: 'https://linkedin.com/in/yurik-dev/',
  },
];
