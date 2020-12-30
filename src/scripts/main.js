$(function () {
	let methods = {
		navFixed: function () {
			$(window).on('scroll', function () {
				let y = $(this).scrollTop()
				let r = $('#menu').innerHeight()
				if (y >= $('#kv').innerHeight()) {
					$('#menu').addClass('fixed')
					$('#menu + .wrapper').css({
						'margin-top': r
					})
				} else {
					$('#menu').removeClass('fixed')
					$('#menu + .wrapper').css({
						'margin-top': ''
					})
				}
			})
		},
		btnPosition: function () {
			$(window).on('load resize', function () {
				$('#btns').css({
					'margin-right': - $('.wrapper').innerWidth() / 2 + 'px'
				})
			})
		},
		acdToggle: function () {
			$('.acd .acd-item .acd-head').on('click', function (e) {
				e.stopPropagation()
				$(this).toggleClass('is-active')
				$(this).siblings().slideToggle('slow')
			})
		},
		hashTarget: function () {
			$('a[href^="#"]').on('click', function (event) {
				var target = $($(this).attr('href'))
				if (target.length) {
					event.preventDefault()
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500)
				}
			})
		},
		removeLocationHash: function () {
			let noHashURL = window.location.href.replace(/#.*$/, '')
			window.history.replaceState('', document.title, noHashURL)
		}
	}
	let init = function () {
		methods.navFixed()
		methods.btnPosition()
		methods.acdToggle()
		methods.removeLocationHash()
	}
	let beforeunload = function () {
		$(window).on('beforeunload', function () {
			location.reload()
			$(window).scrollTop(0)
		})
	}
	init()
	beforeunload()
})