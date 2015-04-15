var templates = [
                 "root/externallib/text!root/plugins/authentication/theme.css",
                 "root/externallib/text!root/plugins/authentication/login.html",
                 "root/externallib/text!root/plugins/authentication/program.html",
                 "root/externallib/text!root/plugins/authentication/sign-up.html",
                 "root/externallib/text!root/plugins/authentication/SignUp_ByKey.html"
                 ];

define(templates, function (theme, loginForm, program, signupForm, signupKeyForm) {
       var plugin = {
       settings: {
       name: "authentication",
       type: "general",
       menuURL: "#authentication",
       icon: "plugins/events/icon.png",
       lang: {
       component: "core"
       }
       },
       
       routes: [
                ["authentication", "show_program", "showProgram"]
                ],
       
       showProgram: function() {
       var tpl = {};
       var html = MM.tpl.render(program, tpl);
       MM.panels.show('center', html, {title: MM.lang.s("authentication")});
       }
       };
       
       // Inject allways our custom theme.
       $("#mobilecssurl").html(theme);
       
       // Replace the sign-up form with our custom template.
       $("#add-site_template").html(loginForm);
       $("#sign-up_template").html(signupForm);
       $("#sign-up-by-key_template").html(signupKeyForm);
       
       
       // Automatically use the URL of the moodle moot without further checks.
       MM.checkSite = function(e) {
       MM.addSite(e);
       };
       
       // Inject allways our custom theme.
       MM.loadCachedRemoteCSS = function(e) {
       $("#mobilecssurl").html(theme);
       };
       
       // Do not display the manage accounts page.
       MM._displayManageAccounts = function() {
       MM._displayAddSite();
       };
       
       MM.registerPlugin(plugin);
       
       });