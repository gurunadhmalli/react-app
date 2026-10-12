import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.jsx';

function addTask(title) {
  fireEvent.change(screen.getByLabelText('New task'), { target: { value: title } });
  fireEvent.click(screen.getByText('Add'));
}

describe('App', () => {
  it('renders the heading', () => {
    render(<App />);
    expect(screen.getByText('Task List')).toBeInTheDocument();
  });

  it('adds a task', () => {
    render(<App />);
    addTask('Learn GitHub Actions');
    expect(screen.getByText('Learn GitHub Actions')).toBeInTheDocument();
    expect(screen.getByText('1 task(s) remaining')).toBeInTheDocument();
  });

  it('ignores empty tasks', () => {
    render(<App />);
    addTask('   ');
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('marks a task as done', () => {
    render(<App />);
    addTask('Write tests');
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText('0 task(s) remaining')).toBeInTheDocument();
  });

  it('deletes a task', () => {
    render(<App />);
    addTask('Delete me');
    fireEvent.click(screen.getByLabelText('Delete Delete me'));
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
  });
});
