$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});


const mme= new Map ([[ 'docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ],[ 'pdf', 'application/pdf' ]])
 
 $(document).ready(function () {
 	


	$('#product').on('change', function() {
		$( "#config" ).load("static/mat/questionnaire/"+this.value+".htm",
			function(response, status, xhr){
			//console.log(response);
			loadFormFromCookie($("#config"));
			var delivery=0;//Cookies.get('delivery');
			console.log(delivery);
		    $(".dialog").dialog({
		      autoOpen: false,
		      modal: true,
		      appendTo: "#form"
		    }).parent().css('z-index', '1000');;
			$(function () {
	 		$('#delivery').jstree({
			  "core" : {
			    "animation" : 0,
			    "check_callback" :true,/*: function (op, node, par, pos, more) {
                          // disable operations for disabled nodes            
                          if (this.get_node(par).state.disabled)
                              return false;
 
                          if (op == "rename_node") {
                              rename_node(this.get_node(node), "&quot;"); 
                              //alert(pos);
                              //pos = pos.replace("\"", "'");
                              //alert(pos);
                          }
                          // disable all the context menu operations for the disabled items                         
                          if (this.get_node(par).parent == null) {
                              if (op == "rename_node" || op == "delete_node" || op == "move_node")
                                  return false;
                          }
                      }, //check callback*/ 
			    "themes" : { "stripes" : true },
			    'data' :  delivery ? JSON.parse(delivery) : 
			    	[
			    	{"id": "root",				    "text": "Поставка",				    "parent": "#",				    "type": "root"},
					
					{"id": "ga",				    "text": "САУ ГА",				"parent": "root",				    "type": "system"},
					{"id": "os",				    "text": "ОС",				    "parent": "root",				    "type": "system"},
					{"id": "gts",				    "text": "ГТС",				    "parent": "root",				    "type": "system"},
					{"id": "vu",				    "text": "ВУ",				    "parent": "root",				    "type": "system"},
					{"id": "aux",				    "text": "Доп.",				    "parent": "root",				    "type": "system"},

				{ "id": "j1_5",				    "text": "ПТК ТА-ТИСУ-ВО Шкаф ТА",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_20",				    "text": "СИГН",				    "parent": "j1_5",				    "type": "function"
				}, {
				    "id": "j1_6",				    "text": "ТА",				    "parent": "j1_5",				    "type": "function"
				}, {
				    "id": "j1_7",				    "text": "ПТК ТА-ТИСУ-ВО Шкаф УСО",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_8",				    "text": "ИЗМ",				    "parent": "j1_7",				    "type": "function"
				}, {
				    "id": "j1_9",				    "text": "ТК",				    "parent": "j1_7",				    "type": "function"
				}, {
				    "id": "j1_10",				    "text": "ПТК ТА-ТИСУ-ВО Шкаф УСО ТИСУ",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_29",				    "text": "ТК",				    "parent": "j1_10",				    "type": "function"
				}, {
				    "id": "j1_17",				    "text": "ПТК Енисей ВК",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_18",				    "text": "ВК",				    "parent": "j1_17",				    "type": "function"
				}, {
				    "id": "j1_26",				    "text": "Шкаф защиты ошиновки",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_27",				    "text": "ШЗО",				    "parent": "j1_26",				    "type": "function"
				}, {
				    "id": "j1_25",				    "text": "Шкаф защиты трансформатора",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_28",				    "text": "ШЗТ",				    "parent": "j1_25",				    "type": "function"
				}, {
				    "id": "j1_21",				    "text": "Шкаф защиты генератора",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_24",				    "text": "ШЗГ",				    "parent": "j1_21",				    "type": "function"
				}, {
				    "id": "j1_2",				    "text": "ПТК ЭГР-МНУ Шкаф ЭГР-МНУ",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_3",				    "text": "ЭГР",				    "parent": "j1_2",				    "type": "function"
				}, {
				    "id": "j1_4",				    "text": "МНУ",				    "parent": "j1_2",				    "type": "function"
				}, {
				    "id": "j1_12",				    "text": "ШИС",				    "parent": "ga",				    "type": "sub"
				}, {
				    "id": "j1_16",				    "text": "ЭИ",				    "parent": "j1_12",				    "type": "function"
				}, {
				    "id": "j1_13",				    "text": "ЭС",				    "parent": "j1_12",				    "type": "function"
				},

				{ "id": "j2_1",				    "text": "ПТК БД",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_2",				    "text": "БД",				    "parent": "j2_1",				    "type": "function"
				}, {
				    "id": "j2_3",				    "text": "КО",				    "parent": "j2_1",				    "type": "function"
				},

				{ "id": "j2_4",				    "text": "АРМ оперативного персонала",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_5",				    "text": "АРМ",				    "parent": "j2_4",				    "type": "function"
				},
				{ "id": "j2_6",				    "text": "АРМ ремонтного персонала",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_7",				    "text": "АРМ",				    "parent": "j2_6",				    "type": "function"
				},
				{ "id": "j2_8",				    "text": "АРМ административного персонала",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_9",				    "text": "АРМ",				    "parent": "j2_8",				    "type": "function"
				},
				{ "id": "j2_8a",				    "text": "Мнемощит",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_9a",				    "text": "АРМ",				    "parent": "j2_8a",				    "type": "function"
				},
				{ "id": "j2_8b",				    "text": "Пульт-стол",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_9b",				    "text": "СТОЛ",				    "parent": "j2_8b",				    "type": "function"
				},
				
				{ "id": "j2_10",				    "text": "ПТК ГРАРМ",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_11",				    "text": "ГРАМ",				    "parent": "j2_10",				    "type": "function"
				}, {
				    "id": "j2_12",				    "text": "ГРНРМ",				    "parent": "j2_10",				    "type": "function"
				},

				{ "id": "j2_13",				    "text": "ПТК РУСА",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_14",				    "text": "РУСА",				    "parent": "j2_13",				    "type": "function"
				},

				{ "id": "j2_15",				    "text": "ПТК ТМ",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_16",				    "text": "ТМ",				    "parent": "j2_15",				    "type": "function"
				},

				{ "id": "j2_17",				    "text": "Видеонаблюдение",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_18",				    "text": "CCTV",				    "parent": "j2_17",				    "type": "function"
				},

				{ "id": "j2_19",				    "text": "ПТК СОЕВ",				    "parent": "vu",				    "type": "sub"
				}, {
				    "id": "j2_20",				    "text": "СОЕВ",				    "parent": "j2_19",				    "type": "function"
				}
				]
			  },
			  "types" : {
			    "#" : {
			     "max_depth" : 4,
			      "valid_children" : ["root"]
			    },
			    "root" : {
			      "icon" : "fa fa-leaf",
			      "valid_children" : ["system"]
			    },
			    "system" : {
			      "icon" : "fa fa-briefcase",
			      "valid_children" : ["sub"]
			    },
			    "sub" : {
			    	"icon" : "fa fa-wrench",
			        "valid_children" : ["function"]
			    },
			    "function" : {
			      "icon" : "fa fa-flash",
			      //"valid_children" : []
			    }
			  },
	        'checkbox': {
	            three_state: false,
	            cascade: 'up'
	        },
			  "state" : { "key" : "state_delivery" },
			  "plugins" : [
			    "contextmenu", "dnd",
			    "state", "types", "wholerow", "checkbox"
			  ],
			"contextmenu":{      
		    "items": function($node) {
		        //var tree = $("#tree").jstree(true);
		        return {
				"create" : {
					"_disabled"			: false, //(this.check("create_node", data.reference, {}, "last")),
					"label"				: "Create",
					"action"			: function (data) {
						var inst = $.jstree.reference(data.reference),
							obj = inst.get_node(data.reference);
						var newtype;
						leave = false;
						//Choose allowable child type
						switch(inst.get_type(obj)) {
							case "sub": newtype = "function";break;
							case "system": newtype = "sub";break;
							//no new systems
							//case "root": newtype = "system";break;
							default:leave = True;
							}
						
						if(!leave) {
							inst.create_node(obj, { type : newtype }, "last", function (new_node) {
								try {
									inst.edit(new_node);
								} catch (ex) {
									setTimeout(function () { inst.edit(new_node); },0);
								}
							});
						}
					}
				},
				"rename" : {
					"label"				: "Rename",
					"shortcut"			: 113,
					"shortcut_label"	: 'F2',
					//"icon"				: "glyphicon glyphicon-leaf",
					"action"			: function (data) {
						var inst = $.jstree.reference(data.reference),
							obj = inst.get_node(data.reference);
						inst.edit(obj);
					}
				},
				"remove" : {
					"label"				: "Delete",
					"action"			: function (data) {
						var inst = $.jstree.reference(data.reference),
							obj = inst.get_node(data.reference);
						inst.delete_node(obj);
					}
				},
				
				
		        "setup": {
	                "separator_before": true,
	                "separator_after": false,
	                "label": "Setup",
	                "action": function (data) {
	                	var inst = $.jstree.reference(data.reference),
						obj = inst.get_node(data.reference);
						
	                    $(".dialog").each(function (index,item) {
	                    	if ($(this).dialog("option","title")==obj.text) 
	                    		{$(this).dialog("open");}
	                    });
	                }
		            }
		        };
			    }  
			},

			});
	 	});

			});
		

	})
 
 
	$("#get-preview,#get-docx,#get-pdf").click(function(){
		var params=$("#config").serializeArray();
		var delivery=JSON.stringify($('#delivery').jstree(true).get_json('#', {flat:true}));
		params.push({name:"delivery",value:delivery})//add delivery tree data
		saveFormToCookie($("#config"));
		Cookies.set('delivery', delivery, {expires: 365});
		var type =this.id.slice(4);
		console.log(params);
		
		if (type=="preview") {
			$("#preview").load('/get/preview',params,
				function(response, status, xhr){
				//console.log(response);
				});
		};
	
  
		if (type=="docx" || type=="pdf"){
			var request = new XMLHttpRequest();
			request.open('POST', '/get/'+type, true);
			request.responseType = 'blob';
			request.onload = function() {
				// Only handle status code 200
				if(request.status === 200) {
				// Try to find out the filename from the content disposition `filename` value
				//var disposition = request.getResponseHeader('content-disposition');
				//var matches = /"([^"]*)"/.exec(disposition);
				//var filename = (matches != null && matches[1] ? matches[1] : 'file.pdf');

				// The actual download				
				var blob = new Blob([request.response], { type: mme[type] });
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(blob);
				link.download = 'result.'+type;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			  }
			  // some error handling should be done here...
			};
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			request.send($.param(params,true));
		};
	});


	$('#product').val('hpp').trigger('change');//Choose first one for start
 });//