import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Alert, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Publications.css'; // Import the custom CSS file for styling

const Publications = () => {
    const [publications, setPublications] = useState([]);
    const [filteredPublications, setFilteredPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to fetch publications
    const fetchPublications = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:4000/publications');
            // Sort publications by year in descending order (latest first)
            const sortedPublications = response.data.sort((a, b) => b.year - a.year);
            setPublications(sortedPublications);
            setFilteredPublications(sortedPublications);
        } catch (err) {
            setError("Error fetching publications");
        } finally {
            setLoading(false);
        }
    };

    // Filter publications based on search query
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = publications.filter(
            publication =>
                publication.title.toLowerCase().includes(query) ||
                publication.authors.toLowerCase().includes(query) ||
                publication.year.toString().includes(query) ||
                (publication["Published in"] && publication["Published in"].toLowerCase().includes(query))
        );
        setFilteredPublications(filtered);
    };

    // Fetch publications when the component mounts
    useEffect(() => {
        fetchPublications();
    }, []);

    // Handle manual refresh
    const handleRefresh = () => {
        fetchPublications();
    };

    return (
        <Container className="publications-container">
            <h2>PUBLICATIONS</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Control
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={handleSearch}
                className="mb-3"
            />

            <Button onClick={handleRefresh} variant="primary" disabled={loading}>
                {loading ? 'Refreshing...' : 'Refresh Data'}
            </Button>

            {loading ? (
                <Spinner animation="border" />
            ) : (
                <Table striped bordered hover className="publications-table">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Year</th>
                            <th>Published in</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPublications.map((publication, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{publication.title}</td>
                                <td>{publication.authors}</td>
                                <td>{publication.year}</td>
                                <td>{publication["Published in"] || 'N/A'}</td>
                                <td><a href={publication.link} target="_blank" rel="noopener noreferrer">View</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default Publications;