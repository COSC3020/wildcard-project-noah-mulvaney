xplot = linspace(1, 36, 36);

fib = [0 0 0 0 0 32];
tr = [1 0 0 0 0 0 0 0 0 0 1 0 1];
rm = [0 0 0 0 0 0 0 0 1 0 0 0 0 1 2 2];
iter = [0 0 0 0 0 0 0 0 0 0 0 0 0 2 1 0 0 1 0 1 2 3 7 13 26 52 103 199 389 774 1535 9289 6653 13011 26432 52710];

figure 1
plot(xplot(1:length(fib)), fib)
title("Standard Recursive Implementation")

figure 2
plot(xplot(1:length(tr)), tr)
title("Tail Recursive Implementation")

figure 3
plot(xplot(1:length(rm)), rm)
title("Recursive Implementation with Memorization")

figure 4
plot(xplot(1:length(iter)), iter)
title("Top-Down Dynamic Implementation")

figure 5
plot(xplot, zeros(length(xplot)))
title("Closed-form Formula")
