function fillInfo(tester_email, tester_password) {


    //USER REGISTRATION
    if (window.location.pathname.match(/.*\Register$/)) {
        var d = new Date();

        var month = d.getMonth() + 1;
        var day = d.getDate();

        var email = "test" +
                (('' + month).length < 2 ? '0' : '') + month +
                (('' + day).length < 2 ? '0' : '') + day + "@asdf.net";

        $('#EmailAddress').val(email);
        $('#EmailAddressCheck').val(email);
        $('#Password').val(tester_password);
        $('#PasswordCheck').val(tester_password);

        selectrandom('#TitleTypeCode');
        $('#FirstName').val('TESTF');
        $('#LastName').val('TESTL');
        $('#Address1').val('TEST_Address');
        $('#City').val('TEST_City');
        $('#PostalCode').val('1234');
        $('#MobilePhone').val('555456789');
        //$('#btnRegister').click();
//HOME PAGE
    } else if (window.location.pathname.match(/.*HomePage\.html.*/)) {

        var randomdest = Math.floor(Math.random() * 151);
        $('select[id*="orig"] :nth-child(' + randomdest.toString() + ')').attr('selected', 'selected');
        $('select[id*="orig"]').trigger('change');

        var randomtarget_lenght = $('select[id*="dest"]').children().size();
        var randomtarget = Math.floor(Math.random() * randomtarget_lenght) + 2;

        $('select[id*="dest"] :nth-child(' + randomtarget.toString() + ')').attr('selected', 'selected');
        $('select[id*="dest"]').trigger('change');
        
        
        $('select[id*="oDay"] :nth-child(' + newdate.getDate() + ')').attr('selected', 'selected');
        $('select[id*="oMonYear"] :nth-child(1)').attr('selected', 'selected');
        var d = new Date();
        var currmonth = d.getMonth();
        if (newdate.getMonth() !== currmonth) {
            $('select[id*="oMonYear"] :nth-child(2)').attr('selected', 'selected');
        }

        var retdate = new Date();
        retdate.setDate(retdate.getDate() + 14);
        $('select[id*="rDay"] :nth-child(' + retdate.getDate() + ')').attr('selected', 'selected');
        $('select[id*="rMonYear"] :nth-child(2)').attr('selected', 'selected');
        if (retdate.getMonth() !== currmonth) {
            $('select[id*="rMonYear"] :nth-child(3)').attr('selected', 'selected');
        }

        $('select[id*="numOfAdults"] :nth-child(3)').attr('selected', 'selected');

//BOOKING CHECKOUT
    } else if (window.location.pathname.match(/.*Checkout.mvc\/SignIn$/)) {
	$('#existingEmail').val(tester_email);
	$('#existingPassword').val(tester_password);
	$('#newEmail').val(tester_email);

	} else if (window.location.pathname.match(/.*Booking.mvc\/Step5$/)) {
        if ($('#txtEmailAddress').is(':visible')) {
            $('#txtEmailAddress').val(tester_email);
        }
        if ($('#EmailAddress').is(':visible')) {
            $('#EmailAddress').val(tester_email);
        }
        if ($('#txtPassword').is(':visible')) {
            $('#txtPassword').val(tester_password);
            $('#continueButton').click();
        }
        if ($('#EmailAddressCheck').is(':visible')) {
            $('#EmailAddress').val(tester_email);
            $('#EmailAddressCheck').val(tester_email);
            $('#UserPassword').val(tester_password);
            $('#UserPasswordCheck').val(tester_password);
            selectrandom('#memberTitle');
            $('#FirstName').val('TESTF');
            $('#LastName').val('TESTL');
            $('#Address1').val('TEST_Address');
            $('#City').val('TEST_City');
            $('#PostalCode').val('1234');
            $('#MobilePhone').val('123456789');

        }

        function pos2letter(id) {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var shortid = id.replace("FirstName", "");
            shortid = parseInt(shortid);
            return chars[shortid];
        }

        $.each($('select[id*="travelerTitle"]'), function() {
            selectrandom('#' + this.id);
        });


        $('input[id*="LastName"]').val('Tester').trigger('change');

        $.each($('input[id*="FirstName"]'), function() {
            var letter = pos2letter(this.id);
            $(this).val(letter).trigger('change');
        });

        $('select[id*="Age"] :nth-child(2)').attr('selected', 'selected').trigger('change');
		setTimeout(function(){$('input[id*="BUS"]').click();},200);
		setTimeout(function(){$('#passengerDetailsSection_continue').click();fillpayment();},1000);
		function fillpayment(){
        $('#VerifySecurityCode').val('123');
        if ($('#payment-selector').is(':visible')) {
            $('input#VI').click();
        }
        if ($('#CardNumber').is(':visible')) {
            $('#CardNumber').val('4444333322221111').trigger('change');
        }

        if ($('#SecurityCode').is(':visible')) {
            $('#SecurityCode').val('123').trigger('change');
        }
        if ($('#VerifySecurityCode').is(':visible')) {
            $('#VerifySecurityCode').val('123').trigger('change');
        }


        if ($('#expiryDateMonth').is(':visible')) {
            $('#expiryDateMonth').val('7').trigger('change');
        }
        if ($('#expiryDateYear').is(':visible')) {
            $('#expiryDateYear').val('2015').trigger('change');
        }

        if ($('#NameOnCard').is(':visible')) {
            $('#NameOnCard').val('tester').trigger('change');
        }
        if ($('#SaveMyCreditCard').is(':visible')) {
            $('#SaveMyCreditCard').attr('checked', true).trigger('change');
        }
        $('#chkConfirmTerms').attr('checked', true);
        //$('#btnBookNow').click();
		}
//New myEasyjet
    } else if (window.location.pathname.match(/.*Basket\/MainBasket$/)) {
        $('#paymentType  option:contains("VI")').attr('selected', 'selected')
        $('#cardNumber').val('4444333322221111');
        $('#securityCode').val('123');
        $('#expiryMonth').val('7');
        $('#expiryYear').val('2015');
        $('#nameOnCard').val('Tester');
        $('#acceptFlag').attr('checked', true);
        //$('#btnConfirmPurchase').click();
//Old myEasyjet

    }
    //Seating
    else if (window.location.pathname.match(/.*OnlineCheckin\/Status$/)) {
        $('#selectedPaymentTypeInput  option:contains("VI")').attr('selected', 'selected')
        $('#cardNumberInput').val('4444333322221111');
        $('#securityCodeInput').val('123');
        $('#expiryDateMonthInput').val('7');
        $('#expiryDateYearInput').val('2015');
        $('#nameOnCardInput').val('Tester');
        $('#confirmTermsAndConditions').attr('checked', true);
        //$('#btnConfirmPurchase').click();

    
    } else if (window.location.pathname.match(/.*changehub.asp$/)) {

        if ($('input[name=nameOnCard]').is(':visible')) {
            $('input[name=nameOnCard]').val('tester');
        }
        if ($('select[name=cardType]').is(':visible')) {
            $('select[name=cardType]').val('9');
        }
        if ($('input[name=numOfCard]').is(':visible')) {
            $('input[name=numOfCard]').val('4444333322221111');
        }
        if ($('input[name=securityCode]').is(':visible')) {
            $('input[name=securityCode]').val('123');
        }
        if ($('select[name=cardMonth]').is(':visible')) {
            $('select[name=cardMonth]').val('7');
        }
        if ($('select[name=cardYear]').is(':visible')) {
            $('select[name=cardYear]').val('2015');
        }

        if ($('input[name=terms_carhire]').is(':visible')) {
            $('input[name=terms_carhire]').attr('checked', true);
        }
        $('input[name=terms]').attr('checked', true);

        if ($('input[name=memPassword]').is(':visible')) {
            $('input[name=memPassword]').val(tester_password);
        }
    }
    //LOGIN
    else if (window.location.pathname.match(/.*\/mylogin\/.*/)) {
        $('#emailaddress').val(tester_email);
        $('#password').val(tester_password);
        $('#sign-in-button').click();
    }
    //API FORM
    else if (window.location.pathname.match(/.*\/managebookings\/.*/)) {

        var locators = new Array("#documentType", "#expiryDay", "#expiryMonth", "#expiryYear", "#countryOfIssue", "#nationality", "#birthDateDay", "#birthDateMonth", "#birthDateYear", "#gender");

        var length = locators.length;
        for (var i = 0; i < length; i++) {
            selectrandom(locators[i]);
        }

        $('input[id=documentNumber]').val('6456464532342');
        $('input[id=documentNumber]').trigger('change');


    }
    else if ($('#btnTopContinue').is(':visible')) {
        $('#btnTopContinue').click();
    }
    else if ($('#btnContinue').is(':visible')) {
        $('#btnContinue').click();
    }
    else if ($('#ContinueButton').is(':visible')) {
        $('#ContinueButton').click();
    }
    else if ($('.OutboundDaySliderContainer').is(':visible')) {
        box = $('.day ul.leftRow li a');
        position = box.position();
        jQuery(document.elementFromPoint(position.left, position.top)).click();

    }





    function selectrandom(inputlocator) {
        select_lenght = $(inputlocator).children().size();
        possibilities = select_lenght - 1;
        randomchildnum = Math.floor(Math.random() * possibilities) + 2;
        $(inputlocator + ' :nth-child(' + randomchildnum.toString() + ')').attr('selected', 'selected');
        $(inputlocator).trigger('change');
        select_lenght = 0;
        possibilities = 0;
        randomchildnum = 0;
    }



}

fillInfo('janos_virag@epam.com', 'test123');