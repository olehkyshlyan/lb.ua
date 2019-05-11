// ==UserScript==
// @name         LB.ua | News
// @namespace    https://lb.ua/news/
// @noframes
// @version      0.1
// @description  LB.ua | lb.ua | News
// @author       oleh.kyshlyan
// @match        http://lb.ua/news/*
// @match        https://lb.ua/news/*
// @match        http://ukr.lb.ua/news/*
// @match        https://ukr.lb.ua/news/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var LBuaNews = new function(){

  this.colRight = function(){
    var colRightInclosure = function(){
      jQuery(function(){
        var colRight = jQuery("BODY > DIV[class*='site-content'] > DIV[class*='layout-wrapper'] > ASIDE[class*='col-right']");
        if(colRight.length == 1){
          colRight.children().each(function(index,element){
            jQuery(element).children().each(function(index,element){
              if(element.className.indexOf('google') != -1){
                element.style.display = 'none';
              }
            });

            if(element.className.indexOf('adv') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(colRightInclosure,2000);
  }

}

LBuaNews.colRight();
