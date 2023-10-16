/*global QUnit*/

sap.ui.define([
	"resumemodule/controller/ResumeOverview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ResumeOverview Controller");

	QUnit.test("I should test the ResumeOverview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
