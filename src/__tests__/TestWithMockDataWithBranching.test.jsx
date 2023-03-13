import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestWithMockDataWithBranching from '../components/TestWithMockDataWithBranching'
import { mockData } from "../App";

test("List renders successfully", () => {
    render(<TestWithMockDataWithBranching data={mockData} displayUnorderedList={true} />)

    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();

})

test("Ordered list renders", () => {
    render(<TestWithMockDataWithBranching data={mockData} displayUnorderedList={false} />)

    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
})