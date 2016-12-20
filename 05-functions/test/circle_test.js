var circle = {
    radius: 6,
    diameter: function() {
        return this.radius * 2;
    }
}

TestCase("CircleTest", {
    "test should implicitly bind to object": function() {
        assertEquals(12, circle.diameter());
    },
    "test implicit binding to the global object": function() {
        var myDiametet = circle.diameter;
        delete radius;
        assertNaN(myDiametet());
        radius = 2;
        assertEquals(4, myDiametet());
    },
    "test should call radius on anonymous object": function() {
        assertEquals(10, circle.diameter.call({
            radius: 5
        }));
    }
})
