//Abre el pop Up 
function abrirPopUp(pagina){
	var opciones="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, width=450, height=280, top=85, left=-140";
	window.open(pagina,"",opciones);
}

(function($) {
	'use strict';
	/**
	 * Set all elements within the collection to have the same height.
	 */
	$.fn.equalHeight = function() {
		var heights = [];
		$.each(this, function(i, element) {
			var $element = $(element);
			var elementHeight;
			// Should we include the elements padding in it's height?
			var includePadding = ($element.css('box-sizing') === 'border-box') || ($element.css('-moz-box-sizing') === 'border-box');
			if (includePadding) {
				elementHeight = $element.innerHeight();
			} else {
				elementHeight = $element.height();
			}
			heights.push(elementHeight);
		});
		this.css('height', Math.max.apply(window, heights) + 'px');
		return this;
	};
	/**
	 * Create a grid of equal height elements.
	 */
	$.fn.equalHeightGrid = function(columns) {
		var $tiles = this.filter(':visible');
		$tiles.css('height', 'auto');
		for (var i = 0; i < $tiles.length; i++) {
			if (i % columns === 0) {
				var row = $($tiles[i]);
				for (var n = 1; n < columns; n++) {
					row = row.add($tiles[i + n]);
				}
				row.equalHeight();
			}
		}
		return this;
	};
	/**
	 * Detect how many columns there are in a given layout.
	 */
	$.fn.detectGridColumns = function() {
		var offset = 0,
			cols = 0,
			$tiles = this.filter(':visible');
		$tiles.each(function(i, elem) {
			var elemOffset = $(elem).offset().top;
			if (offset === 0 || elemOffset === offset) {
				cols++;
				offset = elemOffset;
			} else {
				return false;
			}
		});
		return cols;
	};
	/**
	 * Ensure equal heights now, on ready, load and resize.
	 */
	var grids_event_uid = 0;
	$.fn.responsiveEqualHeightGrid = function() {
		var _this = this;
		var event_namespace = '.grids_' + grids_event_uid;
		_this.data('grids-event-namespace', event_namespace);

		function syncHeights() {
			var cols = _this.detectGridColumns();
			_this.equalHeightGrid(cols);
		}
		$(window).bind('resize' + event_namespace + ' load' + event_namespace, syncHeights);
		syncHeights();
		grids_event_uid++;
		return this;
	};
	/**
	 * Unbind created events for a set of elements.
	 */
	$.fn.responsiveEqualHeightGridDestroy = function() {
		var _this = this;
		_this.css('height', 'auto');
		$(window).unbind(_this.data('grids-event-namespace'));
		return this;
	};
})(window.jQuery);



/**/
function exportarPedidosExcel(titulo)
{
     var data = $('#data').val();
        if(data == '')
            return;
        
        JSONToCSVConvertor(data, titulo, true);
}


function enviarMailConsulta(emailTo, num)
{
	var body = document.getElementById("cuerpo").value;
	var sub = "Consulta sobre Pedido Nº " + num;
	funSendEMail('Sitio Web',emailTo,'','',sub,body);
}

function funSendEMailUserFunction(intError,strErrorMessage)
{
//	if(intError != '0')
//	{
//		alert(intError + strErrorMessage);
//	}
	
}

function funNOSendEMailUserFunction(intError,strErrorMessage)
{
//	if(intError != '0')
//	{
//		alert(strErrorMessage );
//	}
}


function getFechaActual()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'-'+mm+'-'+yyyy;

return today;
}

function getFechaActualAlt()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

return today;
}

function getFechaMesAnterior()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if(mm == 0)
  mm = 12;


if(mm == 12)
 yyyy = yyyy -1;

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'-'+mm+'-'+yyyy;

return today;
}

function getFechaSeisMeses()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

mm= mm - 6;
if(mm <= 0){
  mm = 12 + mm ;
  yyyy = yyyy -1;
}


if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'-'+mm+'-'+yyyy;

return today;
}

function getFechaMesAnteriorAlt()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if(mm == 0)
  mm = 12;
if(mm == 12)
 yyyy = yyyy -1;


if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

return today;
}

function getFechaSeisMesesAlt()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

mm= mm - 6;
if(mm <= 0){
  mm = 12 + mm ;
  yyyy = yyyy -1;
}


if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

return today;
}

function getDateyyymmdd(date) {
  if (date =='undefined' || date=='')
	return '';
  date=date.split("-");
  var day = date[0];
  var month = date[1];
  var year = date[2];
  return year + '-' + month + '-' + day;
}
function getDateddmmyyyy(date) {
  if (date =='undefined' || date=='')
	return '';
  date=date.split("-");
  var day = date[2];
  var month = date[1];
  var year = date[0];
  return day + '-' + month + '-' + year;
}

function stringToDate(fecha)
{
var parts =fecha.split('-');
var mydate = new Date(parts[2],parts[1]-1,parts[0]); 

return mydate;
}

function sumarDiasAFecha(fecha, dias)
{
   var dat = fecha
    dat.setDate(dat.getDate() + dias);
    return dat;
}


jQuery(function($) {
	$('.owl-item .product .image').responsiveEqualHeightGrid();	
	$('.product .image').responsiveEqualHeightGrid();	
	$('.product h4').responsiveEqualHeightGrid();	
	$('.product h4 a').responsiveEqualHeightGrid();	
	$('.product .description').responsiveEqualHeightGrid();	
	$('.product').responsiveEqualHeightGrid();	
	$('.owl-item').responsiveEqualHeightGrid();

	$('.owl-item .product div.image').responsiveEqualHeightGrid();	
	$('.owl-item .product div.description h4').responsiveEqualHeightGrid();	
	$('.owl-item .product div.price').responsiveEqualHeightGrid();	




	$('.imagenitemarmado').responsiveEqualHeightGrid();	
	$('.SPAN-ARMA-ITEM').responsiveEqualHeightGrid();	
	$('.precio-ami').responsiveEqualHeightGrid();	
	$('.ITEM-ARMAPC').responsiveEqualHeightGrid();	


	$('.elementoclass').responsiveEqualHeightGrid();	
});




$(document).ready(function(){
	
	
	
	
	$("a.6").css("display","none");
	$( "nav > li:odd > a" ).addClass( "color1" );	
	
	logono2(); //muestra info usuario o opcion de login
	/*
	$('#padre').click(function(){
		$(this).toggleClass('expand').toggleClass('collapsed').parent().find('> ul').slideToggle('fast');
	});
	*/
	$('li.masopciones > a').click(function(){
		$(this).toggleClass('expand').toggleClass('collapsed').parent().find('> ul.masop').slideToggle('fast');
	});
	
	//imagenes de fondo de menu categorías

	$('a.cateaux').hover(function(){
		$('.modalMenu').css('background-image','url('+$(this).attr("name")+')');
	})

/*
	$("h1.botonfiltrar").click(function(){
		$("div.filtros_left").toggle(200);
	})
	*/
	/* COMBOS CANTIDAD A MOSTRAR Y ORDEN */
	$("#orden1").change(function(){
		funSetSessionVariable('orden',$('select[id=orden1] option:selected').val())
//		window.location.href = $('select[id=orden1]').val();
		window.location.reload().delay(3000);
	})
	$("#cantmostrar").change(function(){
		funSetSessionVariable('cantidad',$('select[id=cantmostrar] option:selected').val())
		setTimeout('reload()', 800);
//		window.location.href = $('select[id=cantmostrar]').val();
	})

	$("#setcaja").click(function(){
		funSetSessionVariable('caja','1'); 
		setTimeout('reload()', 800);
	})
	$("#setlista").click(function(){
		funSetSessionVariable('caja','2'); 
		setTimeout('reload()', 800);
	})
	
	if(global_caja==='1'){
		$("#setcaja").addClass('selected');
	}
	if(global_caja==='2'){
		$("#setlista").addClass('selected');
	}
	
	

	switch(global_orden) {
		case '1':
			$('#orden1 option').eq(2).prop('selected', true);
			break;
		case '2':
			$('#orden1 option').eq(3).prop('selected', true);
			break;
		case '3':
			$('#orden1 option').eq(0).prop('selected', true);
			break;
		case '4':
			$('#orden1 option').eq(1).prop('selected', true);
			break;
		default:
			$('#orden1 option').eq(0).prop('selected', true);
	}
	//debugger;
	switch(global_cantidad) {
		case '12':
			$('#cantmostrar option').eq(0).prop('selected', true);
			break;
		case '28':
			$('#cantmostrar option').eq(1).prop('selected', true);
			break;
		case '52':
			$('#cantmostrar option').eq(2).prop('selected', true);
			break;
		default:
			$('#cantmostrar option').eq(0).prop('selected', true);
	}
	
})

function reload(){
	window.location.reload()
}

var itemTitTemp, itemImgTemp, itemPrecio;

function agregarACarritoCantidadListado(itemId,itemImg,itemPrecio){
	itemTitTemp = $("#COD"+itemId).text();
	itemImgTemp = itemImg;
	itemPrecioTemp = itemPrecio;
	
	
	cantItems = $('#cant' + itemId).val();
	if(cantItems > 0 && cantItems != '') {
		funAddCartBulk(itemId,cantItems);
		funCalculate();
		return false;
	}
}

function agregarACarritoCantidad(itemId){
     funLoading(1);
     cantItems = $('#caja_cantidad').val();
	 if(cantItems > 0 && cantItems != '') {
		funAddCartBulk(itemId,cantItems);
		funCalculate();
		return false;
	 }
     funLoading(0);
}

function agregarACarrito(itemId,itemImg,itemPrecio){
	itemTitTemp = $("#COD"+itemId).text();
	//itemTitTemp = itemTit;
	itemImgTemp = itemImg;
	itemPrecioTemp = itemPrecio;
	funAddCart(itemId);
	funCalculate();
}


function funAddCartUserFunction (intItemId,strErrorMessage) {
	if(intItemId!=-1) {
		$("#modalcompra .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>¡Se agregó el producto a tu carrito!</h5>");
		$("#modalcompra .modal-body").html("<img src='"+itemImgTemp+"' style='width:80px; height:auto; float:left;'> <b>"+itemTitTemp+"<br />"+itemPrecioTemp+"</b><br />");
		itemTitTemp = '';
		itemImgTemp = '';
	} else {
$("#modalcompra .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito:<br>" +strErrorMessage );
	}
$("#modalcompra").modal('show');
}
function funNOAddCartUserFunction(intItemId,strErrorMessage)
{
	//El producto no entro al carrito
	if( intItemId==-1 ) {
		$("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>El producto no ha sido agregado a su carrito</h5>");
		$("#modalMensaje .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito.");
	}
$("#modalMensaje ").modal('show');
}

/* Métodos para mantener la seleccion del checkout luego del login */
function cambiarDeliveryLogin(dlID){
   funLoading(1);
   funSetSessionVariable('DL','0');
   funDelivery(dlID);
}

function cambiarSaleTermLogin(stID){
   funLoading(1);
   funSetSessionVariable('ST','0');
   funSalesTerms(stID);
}

function cambiarPlanDePagosLogin(ccpID){
   funLoading(1);
   funSetSessionVariable('CCP','0');
   funCreditCardLoanPlan(ccpID);
}

/* FIN Métodos para mantener la seleccion del checkout luego del login*/


function cambiarSaleTerm(stID){
   funLoading(1);
   funSetSessionVariable('ST',stID);
   funSalesTerms(stID);
}

function cambiarPlanDePagos(ccpID,privatekey,publickey){
   funLoading(1);
   if($("#ccp_"+ccpID).data("decidir")=="True"){
	     $("#modalDecidir ").modal('show');
		 $("#privatekey").val(privatekey);
		 $("#publickey").val(publickey);
   }
   funSetSessionVariable('CCP',ccpID);
   funCreditCardLoanPlan(ccpID);
}

function funNoDeliveryUserFunction(intStId,strErrorMessage){
  $("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>Error al seleccionar la forma de envío</h5>");
  $("#modalMensaje .modal-body").html(strErrorMessage);
  $("#modalMensaje ").modal('show');
  funSetSessionVariable('DL','0');
  funLoading(0);
}

function funNOCreditCardLoanPlanSuccessUserFunction(intCCLP,strErrorMessage){
  $("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>Error al seleccionar plan de pagos</h5>");
  $("#modalMensaje .modal-body").html(strErrorMessage);
  $("#modalMensaje ").modal('show');
  funSetSessionVariable('CCP','0');
  funLoading(0);

}

function funNOSalesTermsSuccessUserFunction(intCCLP,strErrorMessage){
  $("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>Error al seleccionar la forma de pago</h5>");
  $("#modalMensaje .modal-body").html(strErrorMessage);
  $("#modalMensaje ").modal('show');
  funSetSessionVariable('ST','0');
  funLoading(0);
}

//comportamiento de top al scrollear

$(window).scroll(
	function(event){
		var scroll=$(window).scrollTop();
		if(scroll > 100){
			$("div.top-bar").hide('fast');
			$("div.nav").addClass('fixedtop');
			$(".fixedtop a.navbar-brand img").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/logoSuperiorBlanco.png"); 
			$("img.cougarboto").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/cougarBotoBlanco.png"); 
			$("img.facebook").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/facebook2.png"); 
			$("img.twitter").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/twitter2.png"); 
			$("img.instagram").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/instagram2.png"); 
		} else {
			$(".fixedtop a.navbar-brand img").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/logoSuperior2.png"); 
			$("img.facebook").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/facebook1.png"); 
			$("img.twitter").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/twitter1.png"); 
			$("img.instagram").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/instagram1.png"); 
			$("div.top-bar").show('fast');
			$("div.nav").removeClass('fixedtop');
			
			$("img.cougarboto").attr("src","https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/cougarBoto.png"); 
		}
	}
)

function funCalculateUserFunction(){
    
	var cantItems = $('#hidCartItemsQty').val();
    var impuestos = $('#hidCartTotalTax').val();
    var subTotal = $('#hidCartSubTotal').val();
    var total = $('#hidCartTotal').val();    
    var interes= $('#hidCartInterest').val();    
    var descuento = $('#hidCartDiscount').val();    
  
    $('#contador').html(cantItems);
    $('#contador2').html(cantItems);
    $('#montoCarrito').html(total);
    $('#montoCarrito2').html(total);

//Solo para el Carrito
	if($(location).attr('href').indexOf("CHECKOUT")!= -1 || $(location).attr('href').indexOf("NPS")!= -1){
		$('#txtItemsQty').html(cantItems);
		$('#txtSubTotal').html(subTotal);
		$('#txtInteres').html(interes);
		$('#txtDescuento').html(descuento);
		if($("#hidCartInterest").val()!="0.00"){
			$("#interes_tr").css("display","");
		}else{
			$("#interes_tr").css("display","none");
		}
		if($("#hidCartDiscount").val()!="0.00"){
			$("#descuento_tr").css("display","");
		}else{
			$("#descuento_tr").css("display","none");
		}

		$('#txtTotalTaxes').html(impuestos);
		$('#txtTotal').html(total);

	}
funLoading(0);
}
function funLoading(x) {
     if(x==1) {
          $(".loading").css('display','block')
     } else {
          $(".loading").css('display','none')
     }
}


function countCarrito(){
	var carrito= $('#contador').text();
	if(typeof( carrito) === "undefined")
		carrito=0;
	else
		carrito= parseInt(carrito);
	return carrito;
}


function funComparaCB(iddelitem,url) {
	if( $('#compacb'+iddelitem).is(':checked') ) {
		$('#comparaid'+iddelitem).html("<a href='" + url + "' class='linkcompara'>Ver comparación</a>");
		$('#compara-box-'+iddelitem).removeClass('compara-box0');
		$('#compara-box-'+iddelitem).addClass('compara-box1');
		funAddItem4Compare(iddelitem);
	} else {
		$('#comparaid'+iddelitem).html('Comparar');
		$('#compara-box-'+iddelitem).removeClass('compara-box1');
		$('#compara-box-'+iddelitem).addClass('compara-box0');
		funDeleteItem4Compare(iddelitem);
	}
}

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ';';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += ' ' + arrData[i][index] + ' ;';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = ReportTitle.replace(/ /g,"_");
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function recomendarProducto() {
	$("#mensaje_suscrip").text("");
	$("#modalrecomendar").modal('show');
}





$(document).ready(function(){
	$('.brand-carousel').slick({
		dots: false,
		infinite: true,
		speed: 2000,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1920,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 4,
					infinite: true,
					dots: false
				}
			},{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 4,
					infinite: true,
					dots: false
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});
	
})




function mailValido(email){	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}	