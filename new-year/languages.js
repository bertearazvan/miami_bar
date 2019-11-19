function addText(element, text) {
  return (document.getElementById(element).innerHTML = text);
}

function addEnglish() {

  addText("menu-home", "HOME");
  addText("menu-about", "ABOUT US");
  addText("menu-tables", "TABLE PACKAGES");
  addText("menu-contact", "CONTACT");

  addText("description-title", "ABOUT US");
  addText("description-text-1", "This special event is best celebrated at Miami Bar. We know that we can make your New Year’ s Eve unforgettable.Our exotic nightclub contains 3 floors with 3 bars, a covered outside courtyard and an exclusive VIP lounge.Experience the grand fireworks show on Gammeltorv and enjoy champagne on the house when the midnight comes.");
  addText("description-text-2", "We open the doors at 10pm and party until people can’t no more!");
  addText("dresscode", 'GALLA // JAKKESÆT // KJOLE // SEXY // 007');

  addText("residentDj-title", "OUR RESIDENT DJ");
  addText("residentDj-description", "The music comes from our resident DJs in the iconic Miami Style.");

  document.querySelectorAll(".position-member").forEach(element => {
    element.innerHTML = "Resident DJ";
  });


  addText("reserve-title", "RESERVE A TABLE FOR NEW YEARS");
  addText("reserve-description", "Don’t wait until the last minute. Reserve your table and secure your spot for alively night.");

  addText("tb-1-header", "Table package 1");
  addText("tb-1-people", "For 4-5 people");
  addText("tb-1-shisha", "1 Shisha");
  addText("tb-1-bottles", "2 bottles of House Spirits ");
  addText("tb-1-bottleC", "1 bottle LucBelaire Rose");
  addText("tb-1-sodas", "Unlimited sodas for mixing");

  addText("tb-2-header", "Table package 2");
  addText("tb-2-people", "For 8-10 people");
  addText("tb-2-shisha", "1 Shisha");
  addText("tb-2-bottles", "2 bottles of House Spirits ");
  addText("tb-2-premium", "1 bottle of Premium Spirits");
  addText("tb-2-bottleC", "1 bottle LucBelaire Rose");
  addText("tb-2-sodas", "Unlimited sodas for mixing");

  addText("tb-2-snacks", "Cake, snacks and table decorations");

  addText("regular-tables-price", "Preorder only 350kr & at the door during the night 450kr");
  addText("regular-tables-bottles", "The bottles of the house include Smirnoff Vodka, Captain Morgan, Pampero Rum(Light or Dark), etc.<br>The premium bottles include Ciroc, Jack Daniel's, etc");

  addText('premium-tables-title', 'PREMIUM LOUNGE TABLE PACKAGES')

  addText("tb-3-header", "Silver table");
  addText("tb-3-people", "For 5 people<br>entrance price included");
  addText("tb-3-shisha", "1 Shisha");
  addText("tb-3-snacks", "Cake, snacks and table decorations");
  addText("tb-3-premium", "1 Ciroc Magnum (1.75L)");
  addText("tb-3-bottleC", "1 bottle LucBelaire Rose");
  addText("tb-3-sodas", "Unlimited sodas for mixing");

  addText("tb-4-header", "Golden table");
  addText("tb-4-people", "For 8 people<br>entrance price included");
  addText("tb-4-shisha", "1 Shisha");
  addText("tb-4-snacks", "2 bottles of House Spirits ");
  addText("tb-4-premium", "1 Ciroc Magnum (3L)");
  addText("tb-4-bottleC", "1 bottle LucBelaire Rose");
  addText("tb-4-sodas", "Unlimited sodas for mixing");

  addText("tb-5-header", "Platinum table");
  addText("tb-5-people", "For 10 people<br>entrance price included");
  addText("tb-5-shisha", "2 Shisha");
  addText("tb-5-snacks", "Cake, snacks and table decorations ");
  addText("tb-5-premium", "2 Ciroc Magnum (2x3L)");
  addText("tb-5-bottleC", "1 bottle LucBelaire Rose");
  addText("tb-5-sodas", "Unlimited sodas for mixing");

  addText("reserve-right", "We reserve the right to reject guests at the door if they don't comply to the required dress code ordoor rules.");
  addText("genuine-reservation", "IN ORDER TO ENSURE A GENUINE RESERVATION, PLEASECONTACT US ON THE OFFICIAL FACEBOOK PAGE.");
  addText("see-facebook", "SEE FACEBOOK PAGE");

  addText("contact-title", "GET IN TOUCH");
  addText("contact-description", "Don’t hesitate to contact us! We are here for you.");
  addText("contact-address", "Gammeltorv 16, 1457 Kobenhavn");
  addText("contact-email", "info@miamibar.dk");
  addText("contact-phone", "+45 28 41 55 49");
}



function addDanish() {

  addText("menu-home", "HOME");
  addText("menu-about", "ABOUT US");
  addText("menu-tables", "TABLE PACKAGES");
  addText("menu-contact", "CONTACT");

  addText("description-title", "ABOUT US");
  addText("description-text-1", "Denne helt specielle begivenhed skal opleves på Miami Bar. Vi ved at vi kan få jeres nytårsaften til at blive uforglemmelig. Vores eksotiske natklub strækker sig over 3 etager med 3 barer, en overdækket gård samt en eksklusiv VIP lounge. Oplev det store fyrværkeri-show på Gammeltorv og fra Rådhuspladsen, og nyd champagne på huset når klokken slår 00.");
  addText("description-text-2", "Vi åbner dørene kl 22.00 og fester til at folk ikke kan mere!");
  addText("dresscode", 'GALLA // JAKKESÆT // KJOLE // SEXY // 007');


  addText("residentDj-title", "OUR RESIDENT DJ");
  addText("residentDj-description", "Musikken kommer fra vores resident DJs i den ikoniske Miami Style - med det bedste RnB / HipHop & Latin & Dance.");

  document.querySelectorAll(".position-member").forEach(element => {
    element.innerHTML = "Resident DJ";
  });



  addText("reserve-title", "RESERVE A TABLE FOR NEW YEARS");
  addText("reserve-description", "Don’t wait until the last minute. Reserve your table and secure your spot for alively night.");

  addText("tb-1-header", "Table package 1");
  addText("tb-1-people", "For 4-5 personer");
  addText("tb-1-shisha", "1 Shisha");
  addText("tb-1-bottles", "2 flaske af husets spiritus");
  addText("tb-1-bottleC", "1 flaske LucBelaire Rose");
  addText("tb-1-sodas", "Ubegrænset sodavand/juice");

  addText("tb-2-header", "Table package 2");
  addText("tb-2-people", "For 8-10 personer");
  addText("tb-2-shisha", "1 Shisha");
  addText("tb-2-bottles", "2 flaske af husets spiritus");
  addText("tb-2-premium", "1 flaske luksus spiritus");
  addText("tb-2-bottleC", "1 flaske LucBelaire Rose");
  addText("tb-2-sodas", "Ubegrænset sodavand/juice");

  addText("tb-2-snacks", "Cake, snacks and table decorations");

  addText("regular-tables-price", "Preorder only 350kr & at the door during the night 450kr");
  addText("regular-tables-bottles", "Husets flasker inkluderer: Smirnoff Vodka, Captain Morgan Rum, Pompero Rum (lys/mork)<br>The premium bottles include Ciroc, Jack Daniel's, etc");

  addText('premium-tables-title', 'PREMIUM LOUNGE TABLE PACKAGES')

  addText("tb-3-header", "Silver table");
  addText("tb-3-people", "For 5 personer<br>entrance price included");
  addText("tb-3-shisha", "1 Shisha");
  addText("tb-3-snacks", "Kransekage, snacks og bordpynt");
  addText("tb-3-premium", "1 Ciroc Magnum (1.75L)");
  addText("tb-3-bottleC", "1 flaske LucBelaire Rose");
  addText("tb-3-sodas", "Ubegrænset sodavand/juice");

  addText("tb-4-header", "Golden table");
  addText("tb-4-people", "For 8 personer<br>entrance price included");
  addText("tb-4-shisha", "1 Shisha");
  addText("tb-4-snacks", "Kransekage, snacks og bordpynt.");
  addText("tb-4-premium", "1 Ciroc Magnum (3L)");
  addText("tb-4-bottleC", "1 flaske LucBelaire Rose");
  addText("tb-4-sodas", "Ubegrænset sodavand/juice");

  addText("tb-5-header", "Platinum table");
  addText("tb-5-people", "For 10 personer<br>entrance price included");
  addText("tb-5-shisha", "2 Shisha");
  addText("tb-5-snacks", "Kransekage, snacks og bordpynt");
  addText("tb-5-premium", "2 Ciroc Magnum (2x3L)");
  addText("tb-5-bottleC", "1 flaske LucBelaire Rose");
  addText("tb-5-sodas", "Ubegrænset sodavand/juice");

  addText("reserve-right", "Vi forbeholder os retten til at afvise gæster i døren hvis disse ikke opfylder vores dresscode eller dør politik.");
  addText("genuine-reservation", "IN ORDER TO ENSURE A GENUINE RESERVATION, PLEASECONTACT US ON THE OFFICIAL FACEBOOK PAGE.");
  addText("see-facebook", "SEE FACEBOOK PAGE");

  addText("contact-title", "GET IN TOUCH");
  addText("contact-description", "Don’t hesitate to contact us! We are here for you.");
  addText("contact-address", "Gammeltorv 16, 1457 Kobenhavn");
  addText("contact-email", "info@miamibar.dk");
  addText("contact-phone", "+45 28 41 55 49");
}

addDanish();