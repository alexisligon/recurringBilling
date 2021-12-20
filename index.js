// function for selecting date range
$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

  function calculate() {
      // get date values from user input
      // subtract to get total number of days
      // divide by 30 (average days in a month)
      const startDate = new Date(document.getElementById('from').value);
      const endDate = new Date(document.getElementById('to').value);
      const monthlyRate = document.getElementById('monthlyRate').value;
      const taxRate = document.getElementById('taxRate').value;

      // one day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24

      // calculating the time difference between two dates
      const diffInTime = endDate.getTime() - startDate.getTime();

      //calculating the number of days between two dates

      const diffInDays = Math.round(diffInTime / oneDay)
    console.log('days passed', diffInDays)

    //calculate the total number of months passed
    const totalMonth = (diffInDays / 30)
    console.log('totalMonth', totalMonth)

    //calculate the total monthly charge
    const monthlyCharge = (totalMonth * monthlyRate).toFixed(2)
    console.log('monthlycharge', monthlyCharge)
    console.log('monthlyrate', monthlyRate)

    //calculate the taxCharge of the total monthly rate
    const taxCharge = (monthlyCharge * taxRate).toFixed(2);
    console.log('taxrate', taxRate)
    console.log('taxCharge', taxCharge)
      
  }