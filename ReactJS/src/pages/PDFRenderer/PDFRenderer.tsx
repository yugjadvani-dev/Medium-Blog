import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const PDFRenderer = () => {
  return (
    <>
      {/* Download PDF */}
      <PDFDownloadLink document={<MyDocument />} fileName="PDFRenderer.pdf">
        {/* blob, url, loading, error  */}
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>

      {/* View PDF */}
      <h6 className="mt-4">PDF Viewer</h6>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </>
  );
};

export default PDFRenderer;
