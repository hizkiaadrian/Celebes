(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{FH4G:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r}));class a{constructor(t){this.date=t.date,this.month=t.month,this.year=t.year}displayDate(){return this.toDate().toLocaleString("en-GB",{year:"numeric",month:"long",day:"numeric"})}toDate(){return new Date(this.year,this.month,this.date)}}function r(t){return new a({date:t.date(),month:t.month(),year:t.year()})}}}]);