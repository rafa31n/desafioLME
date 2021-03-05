        $(function(){
            
            $(document).on("click","#btn-delete",function(){

                $(this).parent().parent().remove();

                getTotal();

            });

            $(document).on("keyup","input[name*=cant]",function(){

                var SubTutal=$(this).val()*$(this).closest("tr").find("td:eq(1)").html();
                $(this).closest("tr").find("td:eq(3)").html(SubTutal.toFixed(2));
                
                getTotal();

            }); 
            
        });

        function getTotal(){
            total=0;
            $("tbody tr").each(function(){
                total=total+Number($(this).find("td:eq(3)").html());
            });
            
            $("#total").html("$"+total.toFixed(2));
        }