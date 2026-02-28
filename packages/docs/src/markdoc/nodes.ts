import { nodes as defaultNodes, Tag } from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify';
import yaml from 'js-yaml';

import { Fence } from '@/components/Fence';

let documentSlugifyMap = new Map();

const nodes = {
  document: {
    ...defaultNodes.document,
    transform(node: any, config: any) {
      documentSlugifyMap.set(config, slugifyWithCounter())

      return new Tag(
        'article',
        {
          frontmatter: yaml.load(node.attributes.frontmatter),
          nodes: node.children,
        },
        node.transformChildren(config),
      )
    },
  },
  code: {
    ...defaultNodes.code,
    render: 'code',
  },
  heading: {
    ...defaultNodes.heading,
    transform(node: any, config: any) {
      let slugify = documentSlugifyMap.get(config)
      let attributes = node.transformAttributes(config)
      let children = node.transformChildren(config)
      let text = children.filter((child: any) => typeof child === 'string').join(' ')
      let id = attributes.id ?? slugify(text)

      return new Tag(
        `h${node.attributes.level}`,
        { ...attributes, id },
        children,
      )
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
};

export default nodes;
