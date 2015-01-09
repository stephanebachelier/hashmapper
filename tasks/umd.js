module.exports = function () {
  'use strict';
  return {
    lib: {
      template: require('path').join(process.cwd(), './tasks/templates/umd.hbs'),
      indent: '  ',
      src: 'dist/<%= pkg.name.replace(/.js$/, "") %>.js',
      dest: 'dist/<%= pkg.name.replace(/.js$/, "") %>.js',
      objectToExport: 'Container',
      deps: {
        default: [],
        amd: [],
        cjs: [],
        global: []
      }
    }
  };
};
