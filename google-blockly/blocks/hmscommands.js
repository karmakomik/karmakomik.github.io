
'use strict';

goog.provide('Blockly.Blocks.hmscommands');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.hmscommands.HUE = 160;

Blockly.Blocks['moveforward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("moveForward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.haathimerasaathi.org/');
  }
};

Blockly.Blocks['turnleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turnLeft");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.haathimerasaathi.org/');
  }
};

Blockly.Blocks['turnright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turnRight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.haathimerasaathi.org/');
  }
};

Blockly.Blocks['eat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("eat");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.haathimerasaathi.org/');
  }
};






















