/* global hexo */

'use strict';

const postTabs = require('./lib/tabs')(hexo);
hexo.extend.tag.register('tabs', postTabs, true);
hexo.extend.tag.register('subtabs', postTabs, true);
hexo.extend.tag.register('subsubtabs', postTabs, true);

const users = require('./lib/users')(hexo);
hexo.extend.tag.register('users', users);
hexo.extend.tag.register('label', require('./lib/label')(hexo));