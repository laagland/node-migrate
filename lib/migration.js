"use strict";

/*!
 * migrate - Migration
 * Copyright (c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Expose `Migration`.
 */

module.exports = Migration;

function Migration(title, up, down, seedFile) {
    this.title = title;
    this.up = up;
    this.down = down;
    this.seedFile = seedFile;
}