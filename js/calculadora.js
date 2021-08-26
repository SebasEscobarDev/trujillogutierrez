/****************************************************************/ 
/* Modulo: [Calculadora Capacidad Financiera] */ 
/* Nombre: [Sebas Gonzalez Escobar] */ 
/* Fecha: [12/02/2020] */ 
/* Descripci¨®n: [Funcionalidad para interaccion con el usuario, calculando la capacidad financiera apartir de los datos ingresados] */ 
/****************************************************************/ 
$(document).ready(function(){
	/* 1) ocultar botones para seleccionar tipo de apartamento */
    $('#buttonTorresDelBosque').hide()
    $('#buttonLaQuinta').hide()
    $('#type').hide()
    /* /end -> 1) */

    /* 2) Funcion para obtener el tipo de proyecto seleccionado y mostrar boton correspondiente que muestra ventana emergente con los tipos de proyectos */
	$('select[name="project_id"]').on('change', function(){
		$('#type').show()
		$('#typeSelected').hide()
		if( $(this).val() == 1 ){
			/* muestro boton de tipos del proyecto LA QUINTA */
			$('#buttonLaQuinta').show()
			$('#buttonTorresDelBosque').hide()
		}else if( $(this).val() == 2 ){
			/* muestro boton de tipos del proyecto TORRES DEL BOSQUE */
			$('#buttonLaQuinta').hide()
			$('#buttonTorresDelBosque').show()
		}
	})
	/* /end -> 2) */
	
	/* 3) Funcion para agregar clase que detectará la elección del usuario en los tipos de apartamentos */
	$('.modal-content').each(function(){
		$(this).children('.container').children('div').not(".row").addClass('type-options')
	})
	/* /end -> 3) */

	/* 4) Funcion encargada de agregar al formulario el tipo de proyecto seleccionado por el usuario */
	$('.type-options').click(function(e){
		$('.modal.show').modal('toggle')
		$('#typeSelected').html('')
		$(this).clone().appendTo('#typeSelected')
		$('#typeSelected').show()
	})
	/* /end -> 4) */

	/* 5) Funcion para calcular capacidad financiera */

	$('#calculate-btn').click(function(){


		/* Validar si hay datos vacios del formulario enviado */
		var isEmpty = 0; //no esta vacio
		$('form input').each(function(){
			if( $(this).val() == '' || $(this).val() == undefined ){
				if( $(this).attr('name') == 'financy' || $(this).attr('name') == 'cuote' ){
					//permitir pasar inputs vacios asignados para mostrar resultados
				}else if( $('select[name="project_id"]').val() == undefined ){
					$('select[name="project_id"]').css({'border':'1px solid red'})
				}else{
					$(this).css({'border':'1px solid red'})
					console.log( 'name : '+$(this).attr('name') )
					console.log( 'id : '+$(this).attr('id') )
					isEmpty++;
				}
			}else{
			
			}

		})

		if( isEmpty ){
			console.log( 'empty: '+isEmpty )
		}else{
			console.log( 'empty: '+isEmpty )

			var titleNotes = $( 'select option[value="'+$('select[name="project_id"]').val()+'"]').html()
			var name = $('input[name="name"]').val()
			var phone = $('input[name="phone"]').val()
			var email = $('input[name="email"]').val()
			var project_id = $('select[name="project_id"]').val()
			var typeSelected = $('#typeSelected input[type="hidden"]').val()
			var typeSelected = $('#typeSelected input[type="hidden"]').val()
			var source_id = $('input[name="source_id"]').val()
			var type = $('#typeSelected input[name="type"]').data('type')
			var stage = $('#typeSelected input[name="type"]').data('stage')
			var typePrice = $('#typeSelected input[name="type"]').data('price')


			$('textarea[name="notes"]').val('Proyecto: '+titleNotes+' <br> Nombre: '+name+ '<br> Celular:'+phone )

			var notes = $('textarea[name="notes"]').val()
			var income = $('#incomeInputId').val()
			const VALOR_1 = .25
			const VALOR_2 = 10000
			var total = income * VALOR_1
			total = total * VALOR_2
			//total = total.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.')
			$('#financy').val('$ '+total)
			var cuote = total / 12
			$('#cuote').val( cuote.toFixed(2) )

			$('.calculate').show()

			window.open("https://trujillogutierrez.com.co/site/gracias-calculadora.html");
			
			/*
			$.ajax({
			    method: 'GET',
			    type: 'GET',
			    crossDomain: true,
			    url: "https://trujillo.quirky.com.co/api/customers/save-calculate",
			    dataType: 'jsonp',
			    data: {
					name : name,
					kpi : income,
					phone : phone,
					email : email,
					project_id : project_id,
					source_id : source_id,
					type: type,
					notes : notes
			    },
			    success: function(result){

					// var url = new URL(url_string);
					// var c = url.searchParams.get("c");
					// console.log(c);

			    	console.log(result)

			    	$('.modal-body').html('')
			    	$('.calculate').clone().appendTo('#modalSendCalculator .modal-body')
			    	$('#modalSendCalculator').modal('toggle')
					console.log('Validado correctamente')
					setTimeout( window.close("https://trujillogutierrez.com.co/site/gracias-calculadora.html") ,10000)

			    },
			    error: function(i,o,s){
			    	$('.modal-body').html('')
			    	$('.calculate').clone().appendTo('#modalSendCalculator .modal-body')
			    	$('#modalSendCalculator').modal('toggle')
					console.log('Validado correctamente')
					setTimeout( window.close("https://trujillogutierrez.com.co/site/gracias-calculadora.html") ,10000)

			    	
					//console.log('Error al validar')
					//console.log(i)
					//console.log(o)
					//console.log(s)
			    }
			});
			*/


			/* DEV */
			console.log('typePrice: '+typePrice)
			$('.modal-body').html('')
	    	$('.calculate').clone().appendTo('#modalSendCalculator .modal-body')
	    	$('#modalSendCalculator').modal('toggle')

			setTimeout( window.close("https://trujillogutierrez.com.co/site/gracias-calculadora.html") ,10000)
			/* /DEV */

		}

	});
	/* /end -> 5) */
	
})