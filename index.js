function SimpleNumber(n) {
    next:
    for(i=2;i<=n;i++){
        for(j=2;j<i;j++){
            if(i%j === 0) {
                continue next
            }
        }
        console.log("простое:"+i);
    }
}
SimpleNumber(1200);

