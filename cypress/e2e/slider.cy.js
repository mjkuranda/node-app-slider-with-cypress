// describe("Swiper Gallery Test", function () {
//     it('Checks if second slide contains "United Kingdom"', function () {
//         cy.visit("http://localhost:3001");
//         cy.get(".swiper-button-next").click();
//         cy.get(".swiper-slide-active").should("contain", "United Kingdom");
//     });
// });

// describe("Swiper Gallery Test", function () {
//     it('Checks if third slide contains "Paris"', function () {
//         cy.visit("http://localhost:3001");
//         cy.get(".swiper-button-next").click();
//         cy.wait(2000);
//         cy.get(".swiper-button-next").click({ force: true });
//         cy.wait(2000);
//         cy.get(".swiper-slide-active").should("contain", "Paris");
//     });
// });

// describe("Sliding Mechanism Test", function () {
//     it("Checks if can go back and forth", function () {
//         const mockFirstSlide = { title: "Rome", description: "Italy" };
//         const mockSecondSlide = {
//             title: "London",
//             description: "United Kingdom",
//         };

//         cy.visit("http://localhost:3001");
//         cy.get(".swiper-slide-active")
//             .should("contain", mockFirstSlide.title)
//             .should("contain", mockFirstSlide.description);
//         cy.get(".swiper-button-next").click();
//         cy.wait(2000);
//         cy.get(".swiper-slide-active")
//             .should("contain", mockSecondSlide.title)
//             .should("contain", mockSecondSlide.description);
//         cy.get(".swiper-button-prev").click();
//         cy.wait(2000);
//         cy.get(".swiper-slide-active")
//             .should("contain", mockFirstSlide.title)
//             .should("contain", mockFirstSlide.description);
//     });
// });

// describe("Title and Description Test", function () {
//     it("Checks if title and description are consistent with requirements", function () {
//         const mockRequiredSlides = [
//             { title: "Rome", description: "Italy" },
//             { title: "London", description: "United Kingdom" },
//             { title: "Paris", description: "France" },
//         ];

//         cy.visit("http://localhost:3001");

//         for (const mockSlide of mockRequiredSlides) {
//             cy.get(".swiper-slide-active .card-description h1").should(
//                 "contain",
//                 mockSlide.title
//             );
//             cy.get(".swiper-slide-active .card-description p").should(
//                 "contain",
//                 mockSlide.description
//             );
//             cy.get(".swiper-button-next").click();
//             cy.wait(2000);
//         }
//     });
// });

describe("Responsiveness Test", function () {
    it("Checks different viewports", function () {
        const viewports = [
            { device: "macbook-11", expectedWidth: 352 },
            { device: "iphone-8", expectedWidth: 280 },
            { device: "ipad-mini", expectedWidth: 384 },
        ];

        viewports.forEach(({ device, expectedWidth }) => {
            it(`Should set correct slide width on ${device}`, function () {
                cy.viewport(device);
                cy.visit("http://localhost:3001");

                cy.get(".swiper-slide")
                    .first()
                    .should("have.css", "width", `${expectedWidth}px`);

                cy.get(".swiper-button-prev").should("be.visible");
                cy.get(".swiper-button-prev").click();

                cy.get(".swiper-button-next").should("be.visible");
                cy.get(".swiper-button-next").click();
            });
        });
    });
});
