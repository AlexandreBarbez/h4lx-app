import { TestBed, async, inject } from '@angular/core/testing';

import { TodolistGuard } from './todolist.guard';

describe('TodolistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistGuard]
    });
  });

  it('should ...', inject([TodolistGuard], (guard: TodolistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
