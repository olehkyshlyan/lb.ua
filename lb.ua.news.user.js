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

  this.articleBody = function(){
    var articleBodyInclosure = function(){
      jQuery(function(){
        var articleBody = jQuery("BODY > DIV[class*='site-content'] ARTICLE[class*='material'] > DIV[itemprop*='articleBody']");
        if(articleBody.length == 1){
          articleBody.children().each(function(index,element){
            if(element.tagName == 'DIV' && element.className.indexOf('google') != -1){
              var adsbygoogle = jQuery(element).has("INS[class*='adsbygoogle']");
              if(adsbygoogle.length == 1){
                element.style.display = 'none';
              }
            }
          });
        }
      });
    }
    setTimeout(articleBodyInclosure,2000);
  }

  this.materialRelated = function(){
    var materialRelatedInclosure = function(){
      jQuery(function(){
        var materialRelated = jQuery("BODY > DIV[class*='site-content'] DIV[class*='col-content-wrapper'] > DIV[class*='material-related']");
        if(materialRelated.length == 1){
          materialRelated.children().each(function(index,element){
            if(element.tagName == 'NOINDEX'){
              var advBanner = jQuery(element).find("DIV[class*='adv-banner']");
              if(advBanner.length > 0){
                var block = advBanner.parent();
                var blockClassName = block.prop("class");
                if(blockClassName == 'block'){
                  block.hide();
                }
              }
            }
          });
        }
      });
    }
    setTimeout(materialRelatedInclosure,2000);
  }

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

LBuaNews.articleBody();
LBuaNews.materialRelated();
LBuaNews.colRight();
