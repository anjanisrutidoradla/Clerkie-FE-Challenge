export const calcProratedAmounts = (accountsList, paymentAmount, selectedId) => {
    const proratedAmounts={};

    const cumBalance=accountsList
    .filter((acc) => acc.id === selectedId ? !acc.selected : acc.selected)
    .reduce((sum, o) => sum + o.balance, 0);
    
    let lastAccId;
    let localCumuAmt=0;
    if (cumBalance>0 && cumBalance>=paymentAmount){
        accountsList.forEach((acc)=>{
            if(acc.id === selectedId ? !acc.selected : acc.selected){
                proratedAmounts[acc.id]=((acc.balance/cumBalance)*paymentAmount).toFixed(2);
                lastAccId=acc.id;
                localCumuAmt+=parseFloat(proratedAmounts[acc.id]);
            }else{
                proratedAmounts[acc.id]=0;
            }
        });
        
        // adjust for rounding error
        if(paymentAmount-localCumuAmt!=0){
            proratedAmounts[lastAccId]=(parseFloat(proratedAmounts[lastAccId])+paymentAmount-localCumuAmt).toFixed(2);
        }
    }
    return proratedAmounts;
}