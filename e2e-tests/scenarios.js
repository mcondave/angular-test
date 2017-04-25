'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

  it('should redirect `index.html` to `index.html#!/phones', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/phones');
  });

  describe('View: Phone list', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones');
    });

    it('should filter the phone list as a user types into the search box', function() {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });

    it('should be possible to control phone order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render phone specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });

  });

  describe('View: Phone detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones/nexus-s');
    });

    it('should display placeholder page with `phoneId`', function() {
      expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
    });

  });

  describe('View: Album List', function() {
    // Inject this
    beforeEach(function() {
      browser.get('index.html#!/albums');
    });

    it('should be possible to control album order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var titleOption = orderSelect.element(by.css('option[value="title"]'));
      var albumTitleColumn = element.all(by.repeater('album in $ctrl.albums').column('album.title'));

      function getTitles() {
          return albumTitleColumn.map(function(elem) {
            return elem.getText();
          });
      }

      queryField.sendKeys('album'); // Narrow the dataset to make assertions shorter

      expect(getTitles()).toEqual([
        'Power, Corruption, and Lies',
        'Stereochrome'
      ]);

      queryField.clear();
      titleOption.click();

      expect(getTitles()).toEqual([
        'Power, Corruption, and Lies',
        'Stereochrome',
        'TNT',
        'We Are The Lazer Viking'
      ]);
    });

    it('should render album specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('album');

      element.all(by.css('.albums li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/albums/new-order-power-corruption-lies');
    });
  });

  describe('View: Album details', function() {

    beforeEach(function() {
      browser.get('index.html#!/albums/new-order-power-corruption-lies');
    });

    it('should display placeholder page with `albumId`', function() {
      expect(element(by.binding('$ctrl.albumId')).getText()).toBe('new-order-power-corruption-lies');
    });
  });

});
