function demo(obj){

    if (obj.dizziness) {
        let intake = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += intake;
        obj.dizziness = false;
    }
    return obj;
}

demo({weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
demo({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });
demo({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });