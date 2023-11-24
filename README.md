# Question Paper Generator

## Overview

This project is a Question Paper Generator that generates question papers for different subjects and difficulty levels. It uses a data structure to store information about subjects, topics, and questions. The generated question paper is then exported to a PDF file.

## Problem Statement

The goal of this project is to generate a question paper of 100 marks total for a given subject, with X% worth of questions classified as easy, Y% as medium, and Z% as hard. The user provides the percentages for each difficulty level.

## Project Structure

- `index.js`: Entry point for the application. It takes user input, initializes the QuestionGenerator, and generates the question paper.
- `QuestionGenerator.js`: Contains the QuestionGenerator class responsible for creating question papers. It uses the provided data structure to fetch questions based on the subject, topic, and difficulty level.
- `data.json`: JSON file containing information about subjects, topics, and questions for different difficulty levels.
- `README.md`: Documentation for the project.

## Setup

1. Run the index.js file by writing the command "node index.js" in your terminal after cloning the github repositery.
