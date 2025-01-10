# Level-Super-Mind-
Specially Created For Hackathon


Project Overview
This project was developed as part of the GenAI Hackathon to showcase the integration of advanced data management and generative AI technologies for actionable social media insights. By leveraging   DataAstra   for data storage and management,   LangFlow   for conversational workflows, and   OpenAI's API   for insight generation, this project provides an innovative approach to analyzing and understanding social media post performance.
Features
-   Data Management with DataAstra  :
  - Upload and store mock social media datasets securely.
  - Efficient handling of structured data with scalability for future use.

-   Conversational Insights with LangFlow  :
  - Interactive workflows for analyzing data using natural language prompts.
  - Automated calculation of averages and performance metrics.

-   Generative AI Integration  :
  - Use OpenAI's API to generate actionable insights, including strengths, weaknesses, and performance trends.
  - Highlight key metrics such as shares, comments, and engagement.
Dataset Description
The mock dataset represents typical social media metrics and includes the following columns:
-   Post_ID  : Identifies the post type (e.g., Reel, Static, Carousel).
-   Share  : Number of shares for the post.
-   Comment  : Number of comments received by the post.
-   Engagement  : Aggregated interactions, including likes, shares, and comments.

  Sample Data  :
| Post_ID  | Share | Comment | Engagement |
|----------|-------|---------|------------|
| Reel     | 150   | 50      | 200        |
| Static   | 120   | 30      | 180        |
| Carousel | 300   | 80      | 400        |
Workflow
       1. Data Upload
- The CSV dataset is uploaded to   DataAstra   for secure and efficient storage.
- Data is organized for seamless querying and scalability.

       2. Interactive Analysis
-   LangFlow   enables users to query the dataset interactively using natural language prompts.
- Examples of queries:
  - "What is the average engagement for reels?"
  - "Which post type has the highest shares?"

       3. Insight Generation
-   OpenAI's API   processes queries to:
  - Generate averages for shares, comments, and engagement.
  - Highlight strengths and weaknesses of different post types.
  - Detect trends and provide actionable recommendations.

       4. Result Presentation
- Insights are presented as:
  - Textual summaries of performance metrics.
  - Visualizations (e.g., graphs and charts) for trend analysis.
  - Actionable recommendations for optimizing social media strategies.
Key Insights
-   Reels  : High engagement but lower shares compared to carousels.
-   Static Posts  : Consistent performance but lower overall engagement.
-   Carousels  : Highest engagement and shares, but comments are relatively lower.
Installation
       Prerequisites
- Python (version 3.8 or above)
- API keys for OpenAI and DataAstra
- CSV dataset

       Steps
1. Clone this repository:
   bash
   git clone https://github.com/username/genai-hackathon-project.git
   
2. Navigate to the project directory:
   bash
   cd genai-hackathon-project
   
3. Install required dependencies:
   bash
   pip install -r requirements.txt
   
4. Configure API keys in the .env file:
   
   OPENAI_API_KEY=your_openai_api_key
   DATAASTRA_API_KEY=your_dataastra_api_key
   
5. Run the application:
   bash
   python main.py
   
Future Enhancements
- Incorporate real-world social media data for analysis.
- Expand metrics to include reach, impressions, and click-through rates.
- Enhance visualizations with advanced dashboards.
Contributing
We welcome contributions! Please fork this repository and submit a pull request with your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments
-   DataAstra   for efficient cloud-based data management.
-   LangFlow   for enabling conversational AI workflows.
-   OpenAI   for providing powerful generative AI capabilities.
