"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          songName: "Resume",
          artistName: "Lil Tjay",
          albumName: "Resume (Single)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          songName: "Welcome to the Party",
          artistName: "Pop Smoke",
          albumName: "Meet the Woo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          songName: "Envy Me",
          artistName: "Dave East",
          albumName: "Karma 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Songs", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
