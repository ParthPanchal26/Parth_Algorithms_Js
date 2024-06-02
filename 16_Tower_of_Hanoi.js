function TowerOfHanoi(n, fromRod, toRod, usingrod) {
    if(n == 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    TowerOfHanoi(n-1, fromRod, usingrod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    TowerOfHanoi(n-1, usingrod, toRod, fromRod);
}

TowerOfHanoi(2, 'A', 'C', 'B');