import Ember from 'ember';
//import ColumnDefinition from 'ember-table/models/column-definition';
//import {randomNumber, randomDate} from '../utils/random';

export default Ember.Component.extend({

  leftWidget:Ember.Object.create({
    widget: 'components/item/list-items',
    title:''
  }),

  model() {
    return {
      addedItems: this.leftWidget
    };
  },
    /*
  //tableColumns: Ember.computed(function() {
  //  var dateColumn = ColumnDefinition.create({
  //    savedWidth: 150,
  //    textAlign: 'text-align-left',
  //    headerCellName: 'Date',
  //    getCellContent: function(row) {
  //      return row.get('date').toDateString();
  //    }
  //  });
  //  var openColumn = ColumnDefinition.create({
  //    savedWidth: 100,
  //    headerCellName: 'Open',
  //    getCellContent: function(row) {
  //      return row.get('open').toFixed(2);
  //    }
  //  });
  //  var highColumn = ColumnDefinition.create({
  //    savedWidth: 100,
  //    headerCellName: 'High',
  //    getCellContent: function(row) {
  //      return row.get('high').toFixed(2);
  //    }
  //  });
  //  var lowColumn = ColumnDefinition.create({
  //    savedWidth: 100,
  //    headerCellName: 'Low',
  //    getCellContent: function(row) {
  //      return row.get('low').toFixed(2);
  //    }
  //  });
  //  var closeColumn = ColumnDefinition.create({
  //    savedWidth: 100,
  //    headerCellName: 'Close',
  //    getCellContent: function(row) {
  //      return row.get('close').toFixed(2);
  //    }
  //  });
  //  return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  //}),
  //
  //tableContent: Ember.computed(function() {
  //  var content = [];
  //  var date;
  //  for (var i = 0; i < 100; i++) {
  //    date = randomDate(new Date(2000, 1, 5), new Date(2012, 2, 2));
  //    content.pushObject({
  //      date: date,
  //      open: randomNumber(100) - 50,
  //      high: randomNumber(100) - 50,
  //      low: randomNumber(100) - 50,
  //      close: randomNumber(100) - 50,
  //      volume: randomNumber(100) * 1000000
  //    });
  //  }
  //  return content;
  //})
  */

  actions: {
    changeLeftWidget(path){
      console.log('Triggered add order');
      this.leftWidget.set('widget',path.widget);
      this.leftWidget.set('title',path.title);
    }
  }


});
