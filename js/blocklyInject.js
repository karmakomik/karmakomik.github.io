/**
* @author : Unnikrishnan R, Ammachi labs
*/

var workspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox')});
var currCode = "";    
function showCode() 
{
  // Generate JavaScript code and display it.
  //Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  currCode = Blockly.JavaScript.workspaceToCode(workspace);
  alert(currCode);
  /*try
  { 
    eval(currCode);
  } 
  catch (e) 
  {
    alert(e);
  }*/
} 