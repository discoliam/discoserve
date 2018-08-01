/*
File List
*/
module.exports = function() {
  const fs = require("fs");
  const filesize = require("file-size");
  const dirTree = require("directory-tree");
  const tree = dirTree("./src/files");
  const children = tree["children"];
  const length = children.length;

  // File Types
  var fileTypes = ["README"];
  var textTypes = [".md"];
  var scriptTypes = [".js", ".json", ".mjs", ".php", ".sh", ".bash"];
  var archiveTypes = [".zip", ".bin", ".tar", ".rar", ".tgz", ".7z"];
  var vectorTypes = [".ai", "svg", ".eps"];
  var siteTypes = [".html", ".php", ".mustache", ".hbs", ".pug", ".jade"];
  var stylesheetTypes = [".css", ".scss", ".sass", ".less"];
  var spreadsheetTypes = [".csv", ".xls", ".xslx", ".sql"];
  var codeTypes = [".jar", ".rb", ".py", ".c"];
  var pngTypes = [".png"];
  var gifTypes = [".gif"];

  function getIcon(stringToMatch) {
    if (textTypes.includes(stringToMatch)) {
      return "text";
    } else if (scriptTypes.includes(stringToMatch)) {
      return "script";
    } else if (archiveTypes.includes(stringToMatch)) {
      return "archive";
    } else if (vectorTypes.includes(stringToMatch)) {
      return "vector";
    } else if (siteTypes.includes(stringToMatch)) {
      return "site";
    } else if (stylesheetTypes.includes(stringToMatch)) {
      return "stylesheet";
    } else if (spreadsheetTypes.includes(stringToMatch)) {
      return "spreadsheet";
    } else if (codeTypes.includes(stringToMatch)) {
      return "code";
    } else if (pngTypes.includes(stringToMatch)) {
      return "png";
    } else if (gifTypes.includes(stringToMatch)) {
      return "gif";
    } else {
      return "file";
    }
  }

  var i = 0;
  var tableRow = "<tr>";
  for (i = 0; i < length; i++) {
    var fileName = children[i]["name"],
      fileSize = filesize(children[i]["size"]).human(),
      fileExt = children[i]["extension"];

    tableRow +=
      '<tr><td valign="top"><a href="/files/' +
      fileName +
      '" target="_blank"><img src="/images/icons/' +
      getIcon(fileExt) +
      '.svg" /></a></td><td><a href="/files/' +
      fileName +
      '" target="_blank">' +
      fileName +
      '</a></td><td align="right">' +
      fileSize +
      "</td></tr>";
  }
  tableRow += "</tr>";

  return tableRow;
};
