!function(){function e(){return window.pageYOffset||document.documentElement.scrollTop}function n(e,n){var a;a=document.querySelector(e),a.className=a.className.replace(n,""),a.className=a.className+n}function a(e,n){var a;a=document.querySelector(e),a.className=a.className.replace("shrink","")}var c=80,r=0;window.onscroll=function(){var s=e();s>r?n(".header"," shrink"):c>=s&&a(".header"," shrink"),r=s}}();