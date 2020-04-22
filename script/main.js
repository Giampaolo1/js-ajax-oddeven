// Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde.
// Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.

  $(document).ready(function() {
  $(".bottone").click(function(){
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(num){
        if (num.response % 2 === 0) {
          $(".numverdi").append(num.response + " ");
        } else {
          $(".numrossi").append(num.response + " ");
        }
      },
      error: function (error){
        alert("errore");
      }
    });
  });
});
