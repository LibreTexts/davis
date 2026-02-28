import { Prism } from 'prism-react-renderer'

// Set Prism on global object for language extensions
;(typeof global !== 'undefined' ? global : window).Prism = Prism

// Load additional language support
require('prismjs/components/prism-bash')

export { Prism }
