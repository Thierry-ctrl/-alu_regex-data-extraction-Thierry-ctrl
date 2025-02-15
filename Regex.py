
import re

def extract_data(text):
    """
    Extracts specific types of data from a given text using regular expressions.
    
    Parameters:
    text (str): The input string containing various types of data.
    
    Returns:
    dict: A dictionary containing lists of extracted data categorized as emails, URLs, phone numbers, and credit card numbers.
    """
    patterns = {
        "emails": r"\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b",
        "urls": r"\bhttps?://[a-zA-Z0-9./-]+\b",
        "phone_numbers": r"\b\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}\b",
        "credit_cards": r"\b(?:\d{4}[- ]?){3}\d{4}\b"
    }
    
    extracted_data = {}
    for key, pattern in patterns.items():
        extracted_data[key] = re.findall(pattern, text)
    
    return extracted_data

# Ensuring that this block runs only when the script is executed directly
if __name__ == "__main__":
    sample_text = """
    Contact us at support@example.com or visit https://www.example.com. 
    Call (123) 456-7890 or 123-456-7890 for more information.
    Your payment of $1,234.56 has been processed using 1234-5678-9012-3456.
    Invalid emails: user@@example..com, example@.com, @example.com
    Invalid URLs: http:/example.com, www.example, example
    """
    
    results = extract_data(sample_text)
    
    for category, items in results.items():
        print(f"{category.capitalize()}:")
        for item in items:
            print(f"  - {item}")
        print()
