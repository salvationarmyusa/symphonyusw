this["symphony"] = this["symphony"] || {};
this["symphony"]["templates"] = this["symphony"]["templates"] || {};
this["symphony"]["templates"]["docsActive"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n					<p class=\"admin--page-title\">"
    + alias4(((helper = (helper = helpers.nodeText || (depth0 != null ? depth0.nodeText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nodeText","hash":{},"data":data}) : helper)))
    + "</p>\n					<p class=\"admin--page-update\">"
    + alias4((helpers.readableDate || (depth0 && depth0.readableDate) || alias2).call(alias1,depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.published : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "						<div class=\"admin--icon-edit\" onClick=\"symphony.admin.editDocument('"
    + alias4(((helper = (helper = helpers.nodeId || (depth0 != null ? depth0.nodeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nodeId","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-pencil-square-o\"></i></div>\n						<div class=\"admin--icon-delete\" onClick=\"symphony.admin.tempDelete('"
    + alias4(((helper = (helper = helpers.nodeId || (depth0 != null ? depth0.nodeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nodeId","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<div class=\"admin--icon-toggle published\" onClick=\"symphony.admin.togglePublishStatus(this, '"
    + container.escapeExpression(((helper = (helper = helpers.nodeId || (depth0 != null ? depth0.nodeId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"nodeId","hash":{},"data":data}) : helper)))
    + "');\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<div class=\"admin--icon-toggle unpublished\" onClick=\"symphony.admin.togglePublishStatus(this, '"
    + container.escapeExpression(((helper = (helper = helpers.nodeId || (depth0 != null ? depth0.nodeId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"nodeId","hash":{},"data":data}) : helper)))
    + "');\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"admin--tree-heading\">Active ("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.length : stack1), depth0))
    + ") <a class=\"btn btn-new pull-right popup\" onclick=\"symphony.admin.addTitleModal();\"><i class=\"fa fa-plus page\"></i>Create New Page</a></h2>\n	<ul class=\"admin--tree-pages\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.page : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["docsExpired"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n					<p class=\"admin--page-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n					<p class=\"admin--page-update\">"
    + alias4((helpers.readableDate || (depth0 && depth0.readableDate) || alias2).call(alias1,depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n						<div class=\"admin--icon-restore\" onClick=\"symphony.admin.restoreDeleted('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "', 'document');\"><i class=\"fa fa-level-up\"></i></div>\n						<div class=\"admin--icon-delete\" onClick=\"symphony.admin.hardDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "', 'document');\"><i class=\"fa fa-trash\"></i></div>\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"admin--tree-heading collapsible-trigger\" onClick=\"symphony.admin.collapsibleTrigger(this);\"><i class=\"fa fa-angle-right\"></i> Deleted ("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + ")</h2>\n	<ul class=\"admin--tree-pages collapsible\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.page : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["eventsActive"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRecurring : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "					<p class=\"admin--page-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n					\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRecurring : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n						<div class=\"admin--icon-feature\" onClick=\"symphony.admin.toggleFeaturedStatus(this, '"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hideInMenu : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "						</div>\n						<div class=\"admin--icon-edit\" onClick=\"symphony.admin.editDocument('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-pencil-square-o\"></i></div>\n						<div class=\"admin--icon-delete\" onClick=\"symphony.admin.tempDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<img class=\"admin--icon-event\" src=\"/templates/symphony/static_resources/images/admin/icon-event-recurring.svg\" />\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						<img class=\"admin--icon-event\" src=\"/templates/symphony/static_resources/images/admin/icon-event.svg\" />\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<p class=\"admin--page-update\">Frequency: "
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.customHeadContent : depth0)) != null ? stack1.frequency : stack1), depth0))
    + " "
    + alias1((helpers.readableDate || (depth0 && depth0.readableDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "						<p class=\"admin--page-update\">"
    + container.escapeExpression((helpers.readableDate || (depth0 && depth0.readableDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "							<i class=\"fa fa-star\"></i>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "							<i class=\"fa fa-star-o\"></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"admin--tree-heading\">My Events <a class=\"btn btn-new pull-right\" onClick=\"symphony.admin.addTitleModal();\"><i class=\"fa fa-plus page\"></i>Create New Event</a></h2>\n	<ul class=\"admin--tree-pages\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["eventsExpired"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n					<p class=\"admin--page-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n					<p class=\"admin--page-update\">"
    + alias3((helpers.readableDate || (depth0 && depth0.readableDate) || alias2).call(alias1,depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.expiry : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "						\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<div class=\"admin--icon-edit\" onClick=\"symphony.admin.editDocument('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-pencil-square-o\"></i></div>\n							<div class=\"admin--icon-delete\" onClick=\"symphony.admin.finalDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<div class=\"admin--icon-restore\" onClick=\"symphony.admin.restoreDeleted('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-level-up\"></i></div>\n							<div class=\"admin--icon-delete\" onClick=\"symphony.admin.finalDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"collapsible-trigger admin--tree-heading\" onClick=\"symphony.admin.collapsibleTrigger(this);\"><i class=\"fa fa-angle-right\"></i> Expired / Deleted Events ("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + ")</h2>\n	<ul class=\"admin--tree-pages collapsible\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["googleAnalytics"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"admin--tree-wrapper\">\n	<ul class=\"admin--tree-pages\">\n		<li class=\"admin--tree-page row\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n			<div class=\"col-sm-8 hidden\">\n				<p class=\"admin--page-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"col-xs-12\">\n				<textarea data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" data-prop=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"admin--property-input\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.property : depth0)) != null ? stack1.value : stack1), depth0))
    + "</textarea>\n			</div>\n		</li>\n	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["pressActive"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n					<p class=\"admin--page-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n					<p class=\"admin--page-update\">"
    + alias4((helpers.readableDate || (depth0 && depth0.readableDate) || alias2).call(alias1,depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n						<div class=\"admin--icon-edit\" onClick=\"symphony.admin.editDocument('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-pencil-square-o\"></i></div>\n						<div class=\"admin--icon-delete\" onClick=\"symphony.admin.tempDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"admin--tree-heading\">My Press Releases <a class=\"btn btn-new pull-right\" onClick=\"symphony.admin.addTitleModal();\"><i class=\"fa fa-plus page\"></i>Create New Press Release</a></h2>\n	<ul class=\"admin--tree-pages\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.news : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["socialMedia"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.everyOther || (depth0 && depth0.everyOther) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.index),2,{"name":"everyOther","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"admin--tree-page col-sm-5 col-sm-offset-1\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n						<a>\n							<p class=\"admin--page-title\"><strong>"
    + alias4((helpers.removeUnderscores || (depth0 && depth0.removeUnderscores) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"removeUnderscores","hash":{},"data":data}))
    + "</strong></p>\n							<div class=\"admin--flexbox-form\">\n								<i class=\"fa fa-"
    + alias4((helpers.firstWord || (depth0 && depth0.firstWord) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"firstWord","hash":{},"data":data}))
    + "\"></i>\n								<input class=\"admin--property-input\" type=\"url\" placeholder=\"http://\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-prop=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" pattern=\"https?://.+\" />\n								<span class=\"admin--error-text inactive\">Please begin URL with http:// or https://</span>\n							</div>\n						</a>\n					</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"admin--tree-page col-sm-6\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n						<a>\n							<p class=\"admin--page-title\"><strong>"
    + alias4((helpers.removeUnderscores || (depth0 && depth0.removeUnderscores) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"removeUnderscores","hash":{},"data":data}))
    + "</strong></p>\n							<div class=\"admin--flexbox-form\">\n								<i class=\"fa fa-"
    + alias4((helpers.firstWord || (depth0 && depth0.firstWord) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"firstWord","hash":{},"data":data}))
    + "\"></i>\n								<input class=\"admin--property-input\" type=\"url\" placeholder=\"http://\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-prop=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" pattern=\"https?://.+\" />\n								<span class=\"admin--error-text inactive\">Please begin URL with http:// or https://</span>\n							</div>\n						</a>\n					</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<div class=\"row-fluid\">\n		<div class=\"col-sm-12\">\n			<ul class=\"admin--tree-pages\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.property : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["symphony"]["templates"]["storiesActive"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"admin--tree-page\">\n			<a class=\"row admin--tree-page-summary\">\n				<div class=\"col-sm-8\">\n					<p class=\"admin--page-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n					<p class=\"admin--page-update\">"
    + alias4((helpers.readableDate || (depth0 && depth0.readableDate) || alias2).call(alias1,depth0,{"name":"readableDate","hash":{},"data":data}))
    + "</p>\n				</div>\n				<div class=\"col-sm-4 text-right\">\n					<div class=\"icons\">\n						<div class=\"admin--icon-feature\" onClick=\"symphony.admin.toggleFeaturedStatus(this, '"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hideInMenu : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "						</div>\n						<div class=\"admin--icon-edit\" onClick=\"symphony.admin.editDocument('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-pencil-square-o\"></i></div>\n						<div class=\"admin--icon-delete\" onClick=\"symphony.admin.tempDelete('"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "');\"><i class=\"fa fa-trash\"></i></div>\n					</div>\n				</div>\n			</a>\n		</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<i class=\"fa fa-star\"></i>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "							<i class=\"fa fa-star-o\"></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"admin--tree-wrapper\">\n	<h2 class=\"admin--tree-heading\">My Stories <a class=\"btn btn-new pull-right\" onClick=\"symphony.admin.addTitleModal();\"><i class=\"fa fa-plus page\"></i>Create New Story</a></h2>\n	<ul class=\"admin--tree-pages\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.story : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});
this["symphony"]["templates"]["eventsList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n	<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	<p>"
    + alias4(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data}) : helper)))
    + " @ "
    + alias4(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data}) : helper)))
    + "</p>\n	<hr />\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.myEvents : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["symphony"]["templates"]["getHelpResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\n	<p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<br />\n		"
    + alias4((helpers.roundedDistance || (depth0 && depth0.roundedDistance) || alias2).call(alias1,depth0,{"name":"roundedDistance","hash":{},"data":data}))
    + " miles away<br />\n		Directions: \n			<a target=\"_blank\" href=\"https://maps.google.com?saddr=Current+Location&daddr="
    + alias4((helpers.concatAddress || (depth0 && depth0.concatAddress) || alias2).call(alias1,depth0,{"name":"concatAddress","hash":{},"data":data}))
    + "+"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "+"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.shortCode : stack1), depth0))
    + "+"
    + alias4(((helper = (helper = helpers.zipCode || (depth0 != null ? depth0.zipCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zipCode","hash":{},"data":data}) : helper)))
    + "&dirflg=w\">Walking</a> | \n			<a target=\"_blank\" href=\"https://maps.google.com?saddr=Current+Location&daddr="
    + alias4((helpers.concatAddress || (depth0 && depth0.concatAddress) || alias2).call(alias1,depth0,{"name":"concatAddress","hash":{},"data":data}))
    + "+"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "+"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.shortCode : stack1), depth0))
    + "+"
    + alias4(((helper = (helper = helpers.zipCode || (depth0 != null ? depth0.zipCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zipCode","hash":{},"data":data}) : helper)))
    + "&dirflg=d\">Driving</a> |\n			<a target=\"_blank\" href=\"https://maps.google.com?saddr=Current+Location&daddr="
    + alias4((helpers.concatAddress || (depth0 && depth0.concatAddress) || alias2).call(alias1,depth0,{"name":"concatAddress","hash":{},"data":data}))
    + "+"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "+"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.shortCode : stack1), depth0))
    + "+"
    + alias4(((helper = (helper = helpers.zipCode || (depth0 != null ? depth0.zipCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zipCode","hash":{},"data":data}) : helper)))
    + "&dirflg=r\">Public Transportation</a>\n	</p>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.center : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["symphony"]["templates"]["featuredStories"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n			<div class=\"col-sm-6\">\n\n				<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.rendered : stack1), depth0))
    + "</h1>\n				<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.media : depth0)) != null ? stack1.source_url : stack1), depth0))
    + "\">\n				"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.excerpt : depth0)) != null ? stack1.rendered : stack1), depth0)) != null ? stack1 : "")
    + "\n\n			</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container-fluid padding-top-xxl padding-bottom-xxl\">\n	<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.story : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});