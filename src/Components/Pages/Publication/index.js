/** @format */

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Box,
  Container,
  Text,
  Input,
  Stack,
  Button,
  SimpleGrid,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ResearchPaperItem from "./ResearchPaperItem";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(""); // Store the last updated timestamp
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [searching, setSearching] = useState(false); // State for showing searching animation
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByYear, setSortByYear] = useState("");
  const [sortByCitation, setSortByCitation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageChanging, setIsPageChanging] = useState(false); // State for showing spinner during pagination
  const [isSorting, setIsSorting] = useState(false); // State for showing spinner when sorting
  const papersPerPage = 20; // Default 20 papers per page
  const searchTimeoutRef = useRef(null); // Ref for the debounce timer

  const location = useLocation();
  const navigate = useNavigate();

  // Fetch papers from JSON
  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/Xatta-Trone/google-scholar-scrapper/refs/heads/main/scholar-data-qK-YgxAAAAAJ.json"
        );
        setPapers(response.data.data || []);
        setLastUpdated(response.data.last_updated_utc); // Set the last updated timestamp
      } catch (error) {
        console.error("Error fetching research papers:", error);
      }
    };
    fetchPapers();
  }, []);

  // Reflect search, sort, and pagination state in the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearchTerm(searchParams.get("search") || "");
    setSortByYear(searchParams.get("year") || "");
    setSortByCitation(searchParams.get("citations") || "");
    setCurrentPage(parseInt(searchParams.get("page")) || 1);
  }, [location.search]);

  // Function to format the timestamp
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Debounced Search Function
  const handleSearch = useCallback(
    (e) => {
      const searchQuery = e.target.value;
      setSearchTerm(searchQuery);
      setSearching(true);

      // Clear any existing timeout
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      // Set new debounce timeout
      searchTimeoutRef.current = setTimeout(() => {
        updateURL(searchQuery, sortByYear, sortByCitation, 1);
        setSearching(false);
      }, 500); // 500ms debounce
    },
    [sortByYear, sortByCitation]
  );

  // Updated filtering logic for searching by title and author
  useEffect(() => {
    let tempPapers = [...papers];

    // Search by title or author
    if (searchTerm) {
      tempPapers = tempPapers.filter(
        (paper) =>
          paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (paper.authors &&
            paper.authors.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort by year
    if (sortByYear) {
      tempPapers = tempPapers.sort((a, b) =>
        sortByYear === "asc" ? a.year - b.year : b.year - a.year
      );
    }

    // Sort by citations
    if (sortByCitation) {
      tempPapers = tempPapers.sort((a, b) =>
        sortByCitation === "asc"
          ? parseInt(a.total_citations) - parseInt(b.total_citations)
          : parseInt(b.total_citations) - parseInt(a.total_citations)
      );
    }

    setFilteredPapers(tempPapers);
    // Reset the sorting and page-changing states after filtering
    setIsSorting(false);
    setIsPageChanging(false);
  }, [papers, searchTerm, sortByYear, sortByCitation]);

  // Pagination Logic
  const indexOfLastPaper = currentPage * papersPerPage;
  const indexOfFirstPaper = indexOfLastPaper - papersPerPage;
  const currentPapers = filteredPapers.slice(
    indexOfFirstPaper,
    indexOfLastPaper
  );
  const totalPages = Math.ceil(filteredPapers.length / papersPerPage);

  const updateURL = useCallback(
    (search, year, citations, page) => {
      const searchParams = new URLSearchParams();
      if (search) searchParams.set("search", search);
      if (year) searchParams.set("year", year);
      if (citations) searchParams.set("citations", citations);
      if (page) searchParams.set("page", page);
      navigate(`?${searchParams.toString()}`);
    },
    [navigate]
  );

  const handleSortYearChange = (e) => {
    setIsSorting(true); // Show spinner while sorting
    setSortByYear(e.target.value);
    updateURL(searchTerm, e.target.value, sortByCitation, 1);
  };

  const handleSortCitationChange = (e) => {
    setIsSorting(true); // Show spinner while sorting
    setSortByCitation(e.target.value);
    updateURL(searchTerm, sortByYear, e.target.value, 1);
  };

  // Scroll the whole viewport to the top when changing pages or sorting
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setIsPageChanging(true); // Show spinner when changing pages
      setTimeout(() => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage); // Update the page after delay
        updateURL(searchTerm, sortByYear, sortByCitation, newPage);
        scrollToTop();
        setIsPageChanging(false); // Hide spinner after content is loaded
      }, 500); // 500ms delay to simulate loading
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setIsPageChanging(true); // Show spinner when changing pages
      setTimeout(() => {
        const newPage = currentPage - 1;
        setCurrentPage(newPage); // Update the page after delay
        updateURL(searchTerm, sortByYear, sortByCitation, newPage);
        scrollToTop();
        setIsPageChanging(false); // Hide spinner after content is loaded
      }, 500); // 500ms delay to simulate loading
    }
  };

  // Define motion variants for staggered entry
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Text fontSize="4xl" fontWeight="bold" mb={6} color="teal.600">
          Research Papers
        </Text>

        {/* Source and Last Updated Timestamp */}
        <Text fontSize="sm" color="gray.600" mb={2}>
          Last Updated: {formatDate(lastUpdated)} from Google Scholar
        </Text>

        {/* Search and Sorting */}
        <Stack mb={6} direction={{ base: "column", md: "row" }} spacing={4}>
          <Input
            placeholder="Search by title, author"
            value={searchTerm}
            onChange={handleSearch}
            bg="white"
            borderColor="gray.300"
            color="gray.700"
          />
          <Select
            placeholder="Sort by Year"
            value={sortByYear}
            onChange={handleSortYearChange}
            bg="white"
            borderColor="gray.300"
            color="gray.700"
          >
            <option value="asc" style={{ color: "black" }}>
              Oldest First
            </option>
            <option value="desc" style={{ color: "black" }}>
              Newest First
            </option>
          </Select>
          <Select
            placeholder="Sort by Citations"
            value={sortByCitation}
            onChange={handleSortCitationChange}
            bg="white"
            borderColor="gray.300"
            color="gray.700"
          >
            <option value="asc" style={{ color: "black" }}>
              Fewest Citations
            </option>
            <option value="desc" style={{ color: "black" }}>
              Most Citations
            </option>
          </Select>
        </Stack>

        {/* Loading Animation while Searching or Changing Pages */}
        {(searching || isPageChanging || isSorting) && (
          <Box textAlign="center" py={6}>
            <Spinner size="xl" color="teal.500" />
          </Box>
        )}

        {/* Papers */}
        <Box>
          {!searching &&
            !isPageChanging &&
            !isSorting &&
            filteredPapers.length > 0 && (
              <>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  {currentPapers.map((paper, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                    >
                      <ResearchPaperItem
                        key={index}
                        title={paper.title}
                        total_citations={paper.total_citations}
                        year={paper.year}
                        url={paper.url}
                      />
                    </motion.div>
                  ))}
                </SimpleGrid>

                {/* Pagination */}
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center" // Added to vertically align items
                  mt={8}
                  spacing={4}
                >
                  <Button
                    onClick={handlePrevPage}
                    isDisabled={currentPage === 1}
                    colorScheme="teal"
                    variant="outline"
                    _hover={{ bg: "teal.600", color: "white" }}
                  >
                    Previous
                  </Button>
                  <Text color="gray.700" display="flex" alignItems="center">
                    {" "}
                    {/* Aligns text vertically */}
                    Page {currentPage} of {totalPages}
                  </Text>
                  <Button
                    onClick={handleNextPage}
                    isDisabled={currentPage === totalPages}
                    colorScheme="teal"
                    variant="outline"
                    _hover={{ bg: "teal.600", color: "white" }}
                  >
                    Next
                  </Button>
                </Stack>
              </>
            )}
        </Box>

        {/* No Papers Found */}
        {!searching &&
          !isPageChanging &&
          !isSorting &&
          filteredPapers.length === 0 && (
            <Box textAlign="center" py={6}>
              <Text color="gray.700">No papers found</Text>
            </Box>
          )}
      </Container>
    </Box>
  );
};

export default ResearchPapers;
